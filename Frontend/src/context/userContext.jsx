import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/userReducer.js";
import { USER_API_END_POINT } from "../utils/constants.js";

const AppContext = createContext();

const API = `${USER_API_END_POINT}/users`;

const AppProvider = ({ children }) => {
  const initialState = {
    userDetails: [],
    isFetching: false,
    isProfileFetching:false,
    userProfile: {},
    error: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const getUserDetails = async (url) => {
    dispatch({ type: "SET_IS_FETCHING"});
    try {
      const response = await axios.get(url);
      const usersData = await response.data;
      dispatch({ type: "SET_USER_DETAILS", payload: usersData });
    } catch (error) {
      dispatch({ type: "SET_ERROR"});
    }
  };

  // To get single user profile
  const getUserProfile = async (url) => {
    dispatch({ type: "SET_PROFILE_IS_FETCHING"});
    try {
      const response = await axios.get(url);
      const userData = await response.data;
      dispatch({ type: "SET_PROFILE_DETAILS", payload: userData });
    } catch (error) {
      dispatch({ type: "SET_PROFILE_ERROR", payload: error});
    }
  };

  return (
    <AppContext.Provider value={ {...state, getUserProfile }}>{children}</AppContext.Provider>
  );
};

// Custom Hook
const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useAppContext };
