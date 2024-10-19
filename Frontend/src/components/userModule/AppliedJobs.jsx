import React from "react";
import UserNav from "./UserNav";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@mui/material";
import useGetAppliedJobs from "../customHooks/useGetAppliedJobs";
import { useSelector } from "react-redux";

const AppliedJobs = () => {
  useGetAppliedJobs();
  const { allAppliedJobs } = useSelector((store) => store.job);
  var i = 0;

  return (
    <>
      <header>
        <UserNav />
      </header>
      <main>
        <h3 align="center">Applied Jobs</h3>
        <div id="applied-jobs-table">
          
        </div>
      </main>
    </>
  );
};

export default AppliedJobs;
