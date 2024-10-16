import React from "react";
import JobCard from "../JobCard";
import { Box, Grid2, Typography } from "@mui/material";
import UserNav from "./UserNav";

const BrowseJobs = () => {
  var cardSize = 4;
  return (
    <>
     <header>
            <UserNav/>
        </header>
      <main style={{ display: "flex", flexDirection: "row" }}>
        <Box
          component="div"
          sx={{
            flexGrow: 1,
            height: "100%",
            padding: "0.75rem",
            margin: "0 0 0 1rem",
            borderRadius: "0.5rem",
            minWidth: "30ch",
            minHeight: "80dvh",
            backgroundColor: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(8px)"
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
            margin: "0 1em 0 0",
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
