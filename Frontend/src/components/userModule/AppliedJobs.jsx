import React from "react";
import UserNav from "./UserNav";
import AppliedJobsTable from "../AppliedJobsTable";

const AppliedJobs = () => {

  return (
    <>
      <header>
        <UserNav />
      </header>
      <main>
        <h3 align="center">Applied Jobs</h3>
        <div id="applied-jobs-table">
          <AppliedJobsTable />
        </div>
      </main>
    </>
  );
};

export default AppliedJobs;
