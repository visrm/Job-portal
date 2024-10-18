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

  return (
    <>
      <header>
        <UserNav />
      </header>
      <main>
        <h3 align="center">Applied Jobs</h3>
        <div id="applied-jobs-table">
          <Table
            sx={{
              margin: "0 auto",
              fontFamily: "Poppins,Verdana,Arial,sans-serif",
              fontSize: "2.5rem"
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell><b>Date of Application</b></TableCell>
                <TableCell><b>Job Position</b></TableCell>
                <TableCell><b>Company</b></TableCell>
                <TableCell align="center"><b>Application Status</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allAppliedJobs.map((appliedJob) => {
                return (
                  <TableRow key={appliedJob.id}>
                    <TableCell>{appliedJob?.createdAt}</TableCell>
                    <TableCell>{appliedJob?.job?.title}</TableCell>
                    <TableCell>{appliedJob?.job?.company?.name}</TableCell>
                    <TableCell align="center">
                      <span>{appliedJob?.status}</span>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        {/* Filter options */}
        {/* Sort options */}
        {/* Apply job filter */}
      </main>
    </>
  );
};

export default AppliedJobs;
