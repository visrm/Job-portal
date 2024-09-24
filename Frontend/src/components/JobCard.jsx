import * as React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function JobCard() {
  return (
    <Card
      sx={{
        minWidth: 240,
        position: "relative",
      }}
    >
      <CardContent
        sx={{
          padding: "1rem",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          flexWrap: "nowrap",
        }}
      >
        <div
          className="jobcard-footer"
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            justifyContent: "space-between",
          }}
        >
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            Salary
          </Typography>
          <Typography variant="subtitle2">Job Type</Typography>
        </div>
        <Typography variant="h5">Job Title</Typography>

        <div
          className="jobcard-footer"
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="subtitle2">Location</Typography>
          <Typography variant="subtitle2">Post Time</Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small">apply</Button>
      </CardActions>
    </Card>
  );
}
