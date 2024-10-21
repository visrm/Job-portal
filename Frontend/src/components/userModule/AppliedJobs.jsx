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
        <h2
          align="center"
          style={{ fontFamily: "serif", textTransform: "uppercase" }}
        >
          List Of Applied Jobs
        </h2>
        <div className="applied-jobs-table">
          <AppliedJobsTable />
        </div>
      </main>
    </>
  );
};

export default AppliedJobs;
