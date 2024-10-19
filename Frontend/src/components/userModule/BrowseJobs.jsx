import { useEffect } from "react";
import { Box, Grid2 } from "@mui/material";
import UserNav from "./UserNav";
import JobCard from "../JobCard";
import useGetAllJobs from "../customHooks/useGetAllJobs.jsx";
// redux features import
import { useDispatch, useSelector } from "react-redux";
import { setSearchedQuery } from "../../redux/slices/jobSlice.js";

const BrowseJobs = () => {
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
      <header>
        <UserNav />
      </header>
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
                  if (!job) {
                    return (
                      <div>
                        <h2 align="center">No Jobs available.</h2>
                      </div>
                    );
                  }
                  return (
                    <Grid2 key={job.id}>
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

export default BrowseJobs;
