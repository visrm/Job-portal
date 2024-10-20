import { useState } from "react";
import {
    Button,
    FormControl,
    MenuItem,
    Select,
    TextField
  } from "@mui/material";
  import axios from "axios";
  import { JOB_API_END_POINT } from "../utils/constants.js";
  import { useDispatch } from "react-redux";
  import { setAllJobs } from "../redux/slices/jobSlice.js";

const JobDetailsForm = () => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    requirements: "",
    salary: "",
    location: "",
    jobType: "Full-time",
    vacancy: 0,
    companyId: ""
  });

  const dispatch = useDispatch();

  const handlePostSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(`${JOB_API_END_POINT}/post`, input, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      });
      if (res.data.success) {
        // console.log(res.data);
        dispatch(setAllJobs(res.data.job));
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
    setInput({ ...input, companyId: e.target.value });
  };

  return (
    <>
      <h1 align="center" style={{ color: "blue" }}>
        Enter Job Details
      </h1>
      <form
        method="POST"
        onSubmit={handlePostSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
          gap: "0.5rem",
          width: "100%",
          maxWidth: "33%",
          margin: "0.25rem auto"
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
          <label htmlFor="companyId">Company ID</label>
          <TextField
            required
            onChange={handleChange}
            value={input.companyId}
            name="companyId"
            id="companyId"
            placeholder="670ff24a410ba116c9afc768"
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
            value={input.jobType.length > 0 ? input.jobType : ""}
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
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </FormControl>
      </form>
    </>
  );
};

export default JobDetailsForm;
