import AdminNavigation from "./AdminNavigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@mui/material";
import { useSelector } from "react-redux";
import useGetAllAdminJobs from "../customHooks/useGetAllAdminJobs";

const ManageJobs = () => {
  useGetAllAdminJobs();

  const { allAdminJobs } = useSelector((store) => store.job);
  let i = 0;
  return (
    <>
      <header>
        <AdminNavigation />
      </header>
      <main>
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
                <b>Creation Date</b>
              </TableCell>
              <TableCell>
                <b>Job Position</b>
              </TableCell>
              <TableCell>
                <b>Company</b>
              </TableCell>
              <TableCell>
                <b>Location</b>
              </TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {allAdminJobs.map((allAdminJob) => {
              i++;
              return (
                <TableRow key={i}>
                  <TableCell>{i}</TableCell>
                  <TableCell>{allAdminJob?.createdAt.split("T")[0]}</TableCell>
                  <TableCell>{allAdminJob?.title}</TableCell>
                  <TableCell>{allAdminJob?.company?.name}</TableCell>
                  <TableCell>{allAdminJob?.location}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </main>
    </>
  );
};

export default ManageJobs;
