import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function JobCard() {
  const [salary, setSalary] = useState({
    upperlimit: 8000,
    lowerlimit: 3000,
  });
  const [jobtype, setJobtype] = useState("fulltime");
  const [jobtitle, setJobtitle] = useState("Jr. Software developer");
  const [location, setLocation] = useState("Kozhikode, Kerala");
  const [timestamp, setTimestap] = useState("1Day ago");

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
            {"₹" + salary.lowerlimit + " - " + "₹" + salary.upperlimit}
          </Typography>
          <Typography variant="subtitle2">{jobtype}</Typography>
        </div>
        <Typography variant="h5">{jobtitle}</Typography>

        <div
          className="jobcard-footer"
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="subtitle2">{location}</Typography>
          <Typography variant="subtitle2">{timestamp}</Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small">apply</Button>
      </CardActions>
    </Card>
  );
}
