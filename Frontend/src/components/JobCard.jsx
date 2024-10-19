import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography
} from "@mui/material";
import { useState, useEffect } from "react";

export default function JobCard({ job }) {
  const [jobData, setJobData] = useState({
    salary: {
      lowerlimit: 8000,
      upperlimit: 10000
    },
    type: "Full-time",
    title: "Jr. Software developer",
    location: "Kozhikode, Kerala",
    timestamp: "1 Day ago"
  });

  useEffect(() => {
    setJobData({
      salary: {
        lowerlimit: job?.salary,
        upperlimit: 10000
      },
      type: job?.jobType,
      title: job?.title,
      location: job?.location,
      timestamp: job?.createdAt
    });
  }, []);

  return (
    <Card
      sx={{
        minWidth: 320,
        position: "relative",
        padding: "0.25rem 0.75rem"
      }}
    >
      <CardContent
        sx={{
          padding: "1rem",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          flexWrap: "nowrap"
        }}
      >
        <div
          className="jobcard-footer"
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            justifyContent: "space-between"
          }}
        >
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            {"₹" +
              jobData.salary.lowerlimit +
              " - " +
              "₹" +
              jobData.salary.upperlimit}
          </Typography>
          <Typography variant="subtitle2">{jobData.type}</Typography>
        </div>
        <Typography variant="h5">{jobData.title}</Typography>

        <div
          className="jobcard-footer"
          style={{
            display: "flex",
            marginBlockStart: "0.75rem",
            flexDirection: "row",
            flexWrap: "nowrap",
            justifyContent: "space-between"
          }}
        >
          <Typography variant="subtitle2">{jobData.location}</Typography>
          <Typography variant="subtitle2">{jobData.timestamp}</Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small">apply</Button>
      </CardActions>
    </Card>
  );
}
