import { useEffect } from "react";
import axios from "axios";
import { JOB_API_END_POINT } from "../../utils/constants.js";
// redux features import
import { useDispatch, useSelector } from "react-redux";
import { setAllJobs } from "../../redux/slices/jobSlice.js";

const useGetAllJobs = () => {
  const dispatch = useDispatch();
  const { searchQuery } = useSelector((store) => store.job);
  useEffect(() => {
    (async function FetchAllJobs() {
      try {
        const response = await axios.get(
          `${JOB_API_END_POINT}/get?keyword=${searchQuery}`,
          { withCredentials: true }
        );
        if (response.data.success) {
          dispatch(setAllJobs(response.data.jobs));
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
};

export default useGetAllJobs;
