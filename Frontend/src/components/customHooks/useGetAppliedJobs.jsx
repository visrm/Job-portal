import axios from "axios";
import { useEffect } from "react";
import { APPLICATION_API_END_POINT } from "../../utils/constants.js";
// redux features import
import { useDispatch } from "react-redux";
import { setAllAppliedJobs } from "../../redux/slices/jobSlice.js";

const useGetAppliedJobs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async function FetchAllAppliedJobs() {
      try {
        const response = await axios.get(`${APPLICATION_API_END_POINT}/get`, {
          withCredentials: true
        });
        if (response.data.success) {
          dispatch(setAllAppliedJobs(response.data.application));
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
};

export default useGetAppliedJobs;
