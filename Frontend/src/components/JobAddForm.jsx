import { useState } from "react";
import {
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import axios from "axios";
import { JOB_API_END_POINT } from "../utils/constants.js";
import { useDispatch, useSelector } from "react-redux";
import { setAllJobs } from "../redux/slices/jobSlice.js";

const JobsAddForm = () => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    requirements: "",
    salary: "",
    location: "",
    jobType: "Full-time",
    vacancy: "",
    companyId: "",
  });
  const { companies } = useSelector((store) => store.company);
  const dispatch = useDispatch();

  const handlePostSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(`${JOB_API_END_POINT}/post`, input, {
        headers: {
          "Content-Type": "application/json",
        }, 
        withCredentials: true,
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

  const selectChangeHandler = (e) => {
    const selectedCompany = companies.find(
      (company) => company?.name.toLowerCase() === e.target.value.toString()
    );
    setInput({ ...input, companyId: selectedCompany._id });
  };

  const jobTypeSelectHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div
        style={{
          display: "grid",
          backgroundColor: "rgba(0, 0, 0, 0.05)",
          backdropFilter: " blur(4px)",
          margin: "0.2rem auto",
          padding: "1rem 0.5rem",
          height: "100%",
          width: "100%",
          maxWidth: "50%",
          minWidth: "fit-content",
        }}
      >
        <h2
          align="center"
          style={{ fontFamily: "serif", paddingBottom: "0.2rem" }}
        >
          ADD JOB
        </h2>
        <form
          method="POST"
          onSubmit={handlePostSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            gap: "0.5rem",
            width: "66%",
            maxWidth: "100%",
            margin: "0.25rem auto",
          }}
        >
          <FormControl className="form-field">
            <label htmlFor="title">Job Title:</label>
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
            <label htmlFor="description">Description:</label>
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
            <label htmlFor="requirements">Requirements:</label>
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
          {/* Old Company add field
          
          <FormControl className="form-field">
            <label htmlFor="companyId">Company Ref ID</label>
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
          
          */}

          {companies.length > 0 && (
            <FormControl className="form-field">
              <label htmlFor="companyref" className="form-label">
                Company:
              </label>
              <Select
                required
                onChange={selectChangeHandler}
                fullWidth
                id="comapnyref"
                name="companyId"
                size="small"
                defaultValue=""
              >
                <MenuItem value="">None</MenuItem>
                {companies.length > 0 &&
                  companies.map((company) => {
                    return (
                      <MenuItem
                        key={company?._id}
                        value={
                          company?.name.length > 0
                            ? company?.name.toLowerCase()
                            : company?.name.toLowerCase() === `google`
                        }
                      >
                        {company?.name}
                      </MenuItem>
                    );
                  })}
              </Select>
            </FormControl>
          )}

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
            <label htmlFor="salary">Salary:</label>
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
            <label htmlFor="location">Location:</label>
            <TextField
              required
              onChange={handleChange}
              value={input.location}
              name="location"
              id="location"
              placeholder="Vadakara, Kerala"
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
              onClick={() => {
                window.location.reload();
              }}
            >
              Submit
            </Button>
          </FormControl>
          {companies.length === 0 && (
            <p
              style={{
                color: "blue",
                fontSize: "1rem",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              *Please register a company first, before posting a jobs
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default JobsAddForm;
