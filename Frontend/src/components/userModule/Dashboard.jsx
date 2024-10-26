import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@mui/material";
import UserNav from "./UserNav";
import Profile from "./Profile";
import useGetAppliedJobs from "../customHooks/useGetAppliedJobs";
import { useSelector } from "react-redux";

const Dashboard = () => {
  useGetAppliedJobs();

  const { allAppliedJobs } = useSelector((store) => store.job);
  var i = 0; // for usage as unique key & Serial Number
  return (
    <>
      <header>
        <UserNav />
      </header>
      <main>
        <section
          style={{
            display: "block",
            marginBlock: "1rem auto",
            border: "1px"
          }}
        >
          <Profile />
        </section>
        <section
          className="applied-jobs-table"
          style={{
            marginBlock: "1rem",
            padding: "1rem 2rem 0.25rem 2rem"
          }}
        >
          <h2
            align="center"
            style={{ fontFamily: "serif", textTransform: "uppercase" }}
          >
            Applied Jobs List
          </h2>
          <Table
            sx={{
              margin: "0 auto",
              width: "100%",
              fontFamily: "Poppins,Verdana,Arial,sans-serif",
              fontSize: "2.5rem"
            }}
          >
            <TableHead
              sx={{
                fontWeight: "bold"
              }}
            >
              <TableRow>
                <TableCell align="left">
                  <b>S.No</b>
                </TableCell>
                <TableCell>
                  <b>Job Position</b>
                </TableCell>
                <TableCell align="center">
                  <b>Company</b>
                </TableCell>
                <TableCell align="center">
                  <b>Application Status</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allAppliedJobs.length > 0 ? (
                allAppliedJobs.map((appliedJob) => {
                  i++;
                  return (
                    <TableRow key={i}>
                      <TableCell>{i}</TableCell>
                      <TableCell>{appliedJob?.job?.title}</TableCell>
                      <TableCell align="center">
                        {appliedJob?.job?.company?.name}
                      </TableCell>
                      <TableCell align="center">
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,255,0.2)",
                            padding: "0.5rem 0.75rem",
                            borderRadius: "0.25rem"
                          }}
                        >
                          <strong>{appliedJob?.status}</strong>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })
              ) : (
                <span
                  style={{
                    fontSize: "0.8rem",
                    color: "blue",
                    width: "100%"
                  }}
                >
                  No Jobs Applied to
                </span>
              )}
            </TableBody>
          </Table>
        </section>
      </main>
    </>
  );
};

export default Dashboard;
