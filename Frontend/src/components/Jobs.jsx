import { useEffect } from "react";
import { Box, Grid2 } from "@mui/material";
import JobCard from "./JobCard";
import useGetAllJobs from "./customHooks/useGetAllJobs.jsx";
// redux features import
import { useDispatch, useSelector } from "react-redux";
import { setSearchedQuery } from "../redux/slices/jobSlice.js";

const Jobs = () => {
  // using getHook for fetching all jobs.
  useGetAllJobs();
  // redux features
  const dispatch = useDispatch();
  const { allJobs } = useSelector((store) => store.job);
  // To set search query string to "".
  useEffect(() => {
    return () => {
      dispatch(setSearchedQuery(""));
    };
  }, []);

  return (
    <>
      <main style={{ display: "flex", flexDirection: "row" }}>
        <Box
          component="div"
          sx={{
            display: "flex",
            flexGrow: 1,
            height: "100%",
            padding: "1rem",
            margin: "0.25rem"
          }}
        >
          <Grid2 container spacing={2}>
            {
              // maps each job from `allJobs` array.
              allJobs.map((job) => {
                return (
                  <Grid2 size={5} key={job?._id}>
                    <JobCard job={job} />
                  </Grid2>
                );
              })
            }
          </Grid2>
        </Box>
      </main>
    </>
  );
};

export default Jobs;
