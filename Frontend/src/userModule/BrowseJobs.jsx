import React from "react";
import UserNavigation from "../components/Navigation/UserNavigation";
import JobCard from "../components/JobCard";
import { Box, Grid2, Typography } from "@mui/material";

const BrowseJobs = () => {
  var cardSize = 4;
  return (
    <>
      <header>
        <UserNavigation />
      </header>

      <main style={{ display: "flex", flexDirection: "row" }}>
        <Box
          component="div"
          sx={{
            flexGrow: 1,
            height: "100%",
            padding: "0.75rem",
            margin: "1.25rem 0 1.25rem 1.25rem",
            border: "1px solid black",
            borderRadius: "0.5rem",
            minWidth: "33ch",
            minHeight: "80dvh"
          }}
        >
          <Typography variant="h5">Job filters</Typography>
        </Box>
        <Box
          component="div"
          sx={{
            display: "flex",
            flexGrow: 1,
            height: "100%",
            padding: "1rem",
            mt: "0.25rem",
          }}
        >
          <Grid2 container spacing={2}>
            <Grid2 size={cardSize}>
              <JobCard />
            </Grid2>
            <Grid2 size={cardSize}>
              <JobCard />
            </Grid2>
            <Grid2 size={cardSize}>
              <JobCard />
            </Grid2>
            <Grid2 size={cardSize}>
              <JobCard />
            </Grid2>
            <Grid2 size={cardSize}>
              <JobCard />
            </Grid2>
            <Grid2 size={cardSize}>
              <JobCard />
            </Grid2>
            <Grid2 size={cardSize}>
              <JobCard />
            </Grid2>
            <Grid2 size={cardSize}>
              <JobCard />
            </Grid2>
            <Grid2 size={cardSize}>
              <JobCard />
            </Grid2>
          </Grid2>
        </Box>
      </main>
    </>
  );
};

export default BrowseJobs;
