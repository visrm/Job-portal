import { useState } from "react";
import AdminNavigation from "./AdminNavigation";
import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField
} from "@mui/material";
import axios from "axios";
import { JOB_API_END_POINT } from "../../utils/constants";

const ManageJobs = () => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    requirements: "",
    salary: "",
    location: "",
    type: "",
    vacancy: "",
    companyId: ""
  });
  async function handlePostSubmit(e) {
    try {
      e.preventDefaults();
      const jobData = {
        title: input.title,
        description: input.description,
        requirements: input.requirements,
        salary: input.salary,
        location: input.location,
        jobType: input.type,
        vacancy: input.vacancy,
        companyId: input.companyId
      };
      const res = await axios.post(`${JOB_API_END_POINT}/post`, jobData, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      });
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (e) => {
    setInput(...input, { [e.target.name]: e.target.value });
  };

  return (
    <>
      <header>
        <AdminNavigation />
      </header>
      <main>
        <h3 align="center">Add Job</h3>
        <form
          method="POST"
          onSubmit={handlePostSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            gap: "0.25rem",
            width: "100%",
            maxWidth: "33%",
            margin: "0.25rem auto"
          }}
        >
          <div style={{}}></div>
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
            <label htmlFor="job-type" className="form-label">
              Job Type:
            </label>
            <RadioGroup
              row
              required
              defaultValue="Full-time"
              onChange={handleChange}
              name="jobType"
              value={input.type}
              id="job-type"
            >
              <FormControlLabel
                value="Full-time"
                control={<Radio checked={input.type === "Full-time"} />}
                label="Full-time"
              />
              <FormControlLabel
                value="Part-time"
                control={<Radio checked={input.type === "Part-time"} />}
                label="Part-time"
              />
              <FormControlLabel
                value="Internship"
                control={<Radio checked={input.type === "Internship"} />}
                label="Internship"
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="form-field">
            <Button variant="contained" type="submit">
              Add
            </Button>
          </FormControl>
        </form>
      </main>
    </>
  );
};

export default ManageJobs;
