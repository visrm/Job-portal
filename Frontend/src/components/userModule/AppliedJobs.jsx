import React from "react";
import UserNav from "./UserNav";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@mui/material";

const AppliedJobs = () => {
  return (
    <>
      <header>
        <UserNav />
      </header>
      <main>
        <h3 align="center">Applied Jobs</h3>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Job Role</TableCell>
              <TableCell>Company</TableCell>
              <TableCell className="text-right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>CreatedAt: 07/24</TableCell>
              <TableCell>Jr. Frontend Developer</TableCell>
              <TableCell>Google</TableCell>
              <TableCell className="text-right">Passed</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>CreatedAt: 05/24</TableCell>
              <TableCell>Jr. Frontend Developer</TableCell>
              <TableCell>Microsoft</TableCell>
              <TableCell className="text-right">Pending</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>CreatedAt: 05/24</TableCell>
              <TableCell>UI/UX Designer</TableCell>
              <TableCell>Oracle</TableCell>
              <TableCell className="text-right">Rejected</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>CreatedAt: 04/24</TableCell>
              <TableCell>Jr. Full-Stack Developer</TableCell>
              <TableCell>Tesla</TableCell>
              <TableCell className="text-right">Rejected</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        {/* Pagination */}
        {/* Filter options */}
        {/* Sort options */}
        {/* Apply job filter */}
      </main>
    </>
  );
};

export default AppliedJobs;
