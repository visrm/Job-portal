import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography
} from "@mui/material";
import axios from "axios";
import { APPLICATION_API_END_POINT } from "../utils/constants.js";

export default function JobCard({ job }) {
  const handleApplyButton = async () => {
    try {
      const jobId = job?._id;
      const response = await axios.get(
        `${APPLICATION_API_END_POINT}/apply/${jobId}`,
        {
          withCredentials: true
        }
      );
      if (response.data.success) {
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const timestampFn = (mongoCreatedAt) => {
    // Takes mongodb 'createdAt' timestamps
    const createdAt = new Date(mongoCreatedAt);
    // In-built JS Date() constructor
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
  };

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
            {`₹ ${job?.salary} - 4,00,000`}
          </Typography>
          <Typography variant="subtitle2">{job?.jobType}</Typography>
        </div>
        <Typography variant="h5">{job?.title}</Typography>
        <Typography variant="body2">
          Requirements: {job?.requirements.toString()}
        </Typography>

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
          <Typography variant="subtitle2">{job?.location}</Typography>
          <Typography variant="subtitle2">
            {timestampFn(job?.createdAt) === 0
              ? "Today"
              : `${timestampFn(job?.createdAt)} days ago`}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          size="small"
          onClick={() => {
            handleApplyButton();
          }}
        >
          apply
        </Button>
      </CardActions>
    </Card>
  );
}
