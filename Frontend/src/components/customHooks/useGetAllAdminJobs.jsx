import { useEffect } from "react";
import axios from "axios";
import { JOB_API_END_POINT } from "../../utils/constants.js";
// redux features import
import { useDispatch } from "react-redux";
import { setAllAdminJobs } from "../../redux/slices/jobSlice.js";

const useGetAllAdminJobs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async function FetchAllAdminJobs() {
      try {
        const response = await axios.get(`${JOB_API_END_POINT}/getadminjobs`, {
          withCredentials: true
        });
        if (response.data.success) {
          dispatch(setAllAdminJobs(response.data.jobs));
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
};

export default useGetAllAdminJobs;
