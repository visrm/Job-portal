import React from "react";
import AdminNavigation from "../Navigation/AdminNavigation";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

const ManageJobs = () => {
  return (
    <div align="center">
      <AdminNavigation />
      <br/> <br/>
      <h3>ADD JOBS</h3>
      <TextField
      required
      id="outlined-required"
      label="Job name"
      variant="filled">
      </TextField>
      <br/><br/>

      <TextField
      required
      id="outlined-required"
      label="Description"
      variant="filled">
      </TextField>
      <br/><br/>
     
      <TextField
      required
      id="outlined-required"
      label="Requirements"
      variant="filled">
      </TextField>
      <br/><br/>

      <TextField
      required
      id="outlined-required"
      label="Location"
      variant="filled">
      </TextField>
      <br/><br/>

      <TextField
      required
      id="outlined-required"
      label="Salary"
      variant="filled">
      </TextField>
     <br/><br/>
      <FormControl variant="filled" required>
      <InputLabel>Job type</InputLabel>
      <Select
      sx={{width: "24ch"}}
      id="job-type"
>
      
      <MenuItem Value="Part-time">Part-time</MenuItem> 
      <MenuItem Value="Full-time">Full-time</MenuItem> 
      <MenuItem value="both">Both</MenuItem>      
      </Select>
      </FormControl>
      <br/><br/>


      <Button variant="contained">Add</Button> &nbsp;&nbsp;
     
      
      <Button variant="contained">Reset</Button>
      <br/><br/><br/>
    </div>
  )
}

export default ManageJobs;
