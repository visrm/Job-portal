import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    allJobs: [],
    allAdminJobs: [],
    searchJobByText: "",
    allAppliedJobs: [],
    searchQuery: "",
    singleJob: ""
  },
  reducers: {
    // actions
    setAllJobs: (state, action) => {
      state.allJobs = action.payload;
    },
    setAllAdminJobs: (state, action) => {
      state.allAdminJobs = action.payload;
    },
    setSearchJobByText: (state, action) => {
      state.searchJobByText = action.payload;
    },
    setAllAppliedJobs: (state, action) => {
      state.allAppliedJobs = action.payload;
    },
    setSearchedQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setJob: (state, action) => {
      state.singleJob = action.payload;
    }
  }
});
//export job actions
export const {
  setAllJobs,
  setAllAdminJobs,
  setSearchJobByText,
  setAllAppliedJobs,
  setSearchedQuery,
  setJob
} = jobSlice.actions;

export default jobSlice.reducer;