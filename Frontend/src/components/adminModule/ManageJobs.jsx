import React from "react";
import AdminNavigation from "./AdminNavigation";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField
} from "@mui/material";

const ManageJobs = () => {
  return (
    <>
      <header>
        <AdminNavigation />
      </header>
      <h3>ADD JOBS</h3>
      <form method="POST">
        <Stack>
          
        </Stack>
        <TextField
          required
          id="outlined-required"
          label="Job position"
          variant="filled"
        ></TextField>
        <TextField
          required
          id="outlined-required"
          label="Description"
          variant="filled"
        ></TextField>
        <TextField
          required
          id="outlined-required"
          label="Requirements"
          variant="filled"
        ></TextField>
        <TextField
          required
          id="outlined-required"
          label="Location"
          variant="filled"
        ></TextField>
        <TextField
          required
          id="outlined-required"
          label="Salary"
          variant="filled"
        ></TextField>
        <FormControl variant="filled" required>
          <InputLabel>Job type </InputLabel>
          <Select
            sx={{ width: "24ch" }}
            id="job-type"
            defaultChecked="Part-time"
          >
            <MenuItem Value="Part-time">Part-time</MenuItem>
            <MenuItem Value="Full-time">Full-time</MenuItem>
            <MenuItem value="Internship">Internship</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained">Add</Button>
      </form>
    </>
  );
};

export default ManageJobs;
