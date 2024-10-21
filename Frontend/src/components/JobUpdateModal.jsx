import { useState } from "react";
import {
  Box,
  Button,
  Modal,
  FormControl,
  MenuItem,
  Select,
  TextField
} from "@mui/material";
import axios from "axios";
import { JOB_API_END_POINT } from "../utils/constants.js";
import { setAllAdminJobs } from "../redux/slices/jobSlice.js";
import { useDispatch } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4
};

export default function JobUpdateModal({ job }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [input, setInput] = useState({
    title: job?.title || "",
    description: job?.description || "",
    requirements: job?.requirements || "",
    salary: job?.salary || "",
    location: job?.location || "",
    jobType: job?.jobType || "Full-time",
    vacancy: job?.vacancy || 0
  });

  const dispatch = useDispatch();

  const handlePutSubmit = async (e) => {
    e.preventDefault();
    try {
      let jobId = job?._id;
      const res = await axios.put(
        `${JOB_API_END_POINT}/update/${jobId}`,
        input,
        {
          headers: {
            "Content-Type": "application/json"
          },
          withCredentials: true
        }
      );
      if (res.data.success) {
        console.log(res.data);
        dispatch(setAllAdminJobs(res.data.job));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    // console.log(input);
  };

  const jobTypeSelectHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Button onClick={handleOpen}>Update</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2 align="center" style={{ color: "blue" }}>
            Enter Job Details
          </h2>
          <form
            method="PUT"
            onSubmit={handlePutSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "nowrap",
              gap: "0.25rem",
              width: "100%",
              maxWidth: "90%",
              margin: "auto auto"
            }}
          >
            <FormControl className="form-field">
              <label htmlFor="title">Job Title</label>
              <TextField
                required
                onChange={handleChange}
                value={input.title}
                name="title"
                id="title"
                placeholder="Senior Web Developer"
                variant="outlined"
                size="small"
                fullWidth
              />
            </FormControl>
            <FormControl className="form-field">
              <label htmlFor="description">Description</label>
              <TextField
                required
                onChange={handleChange}
                value={input.description}
                name="description"
                id="description"
                placeholder="Proficient in Web Development tech"
                variant="outlined"
                size="small"
                fullWidth
              />
            </FormControl>
            <FormControl className="form-field">
              <label htmlFor="requirements">Requirements</label>
              <TextField
                required
                onChange={handleChange}
                value={input.requirements}
                name="requirements"
                id="requirements"
                placeholder="HTML/CSS, tailwindcss, Bootstrap etc."
                variant="outlined"
                size="small"
                fullWidth
              />
            </FormControl>
            <FormControl className="form-field">
              <label htmlFor="job-type" className="form-label">
                Job Type:
              </label>
              <Select
                required
                sx={{ display: "block", width: "100%" }}
                size="small"
                id="job-type"
                name="jobType"
                onChange={jobTypeSelectHandler}
                value={
                  input.jobType.length > 0
                    ? input.jobType
                    : input.jobType === "Full-time"
                }
              >
                <MenuItem value="Part-time">Part-time</MenuItem>
                <MenuItem value="Full-time">Full-time</MenuItem>
                <MenuItem value="Internship">Internship</MenuItem>
              </Select>
            </FormControl>
            <FormControl className="form-field">
              <label htmlFor="salary">Salary</label>
              <TextField
                required
                onChange={handleChange}
                value={input.salary}
                name="salary"
                id="salary"
                placeholder="120000"
                variant="outlined"
                size="small"
                fullWidth
              />
            </FormControl>
            <FormControl className="form-field">
              <label htmlFor="location">Location</label>
              <TextField
                required
                onChange={handleChange}
                value={input.location}
                name="location"
                id="location"
                placeholder="Vadakara, Kerala, India"
                variant="outlined"
                size="small"
                fullWidth
              />
            </FormControl>
            <FormControl className="form-field">
              <label htmlFor="vacancy">Vacancy</label>
              <TextField
                required
                onChange={handleChange}
                value={input.vacancy}
                name="vacancy"
                id="vacancy"
                placeholder="45"
                variant="outlined"
                size="small"
                fullWidth
              />
            </FormControl>
            <FormControl className="form-field">
              <Button
                variant="contained"
                type="submit"
                sx={{ marginTop: "0.1rem" }}
              >
                Submit
              </Button>
            </FormControl>
          </form>
        </Box>
      </Modal>
    </>
  );
}
