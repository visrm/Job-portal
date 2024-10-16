const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_IS_FETCHING":
      return { ...state, isFetching: true };
    case "SET_USER_DETAILS":
      return { ...state, isFetching: false, userDetails: action.payload };
    case "SET_ERROR":
      return { ...state, isFetching: false, error: true };
      case "SET_PROFILE_IS_FETCHING":
        return { ...state, isProfileFetching: true };
      case "SET_PROFILE_DETAILS":
        return { ...state, isProfileFetching: false, userProfile: action.payload };
      case "SET_PROFILE_ERROR":
        return { ...state, isProfileFetching: false, error: true };
    default:
      return state;
  }
};

export default userReducer;
