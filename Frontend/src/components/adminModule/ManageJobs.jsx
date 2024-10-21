import Navigation from "./AdminNavigation";
import {
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@mui/material";
import { useSelector } from "react-redux";
import useGetallAdminJobs from "../customHooks/useGetallAdminJobs";
import JobUpdateModal from "../JobUpdateModal";
import JobDetailsForm from "../JobDetailsForm";
import { JOB_API_END_POINT } from "../../utils/constants";
import axios from "axios";
import { useEffect } from "react";
import { setAllAdminJobs } from "../../redux/slices/jobSlice";

const ManageJobs = () => {
  useGetallAdminJobs();

  const { allAdminJobs } = useSelector((store) => store.job);
  let i = 0;

  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`${JOB_API_END_POINT}/remove/${itemId}`);
      setAllAdminJobs(allAdminJobs.filter((item) => item._id !== itemId));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <section>
          <JobDetailsForm />
        </section>

        <section style={{ margin: "1rem auto" }}>
          <h2 align="center" style={{ padding: "1rem" }}>
            JobTable
          </h2>
          {allAdminJobs.length >= 0 && (
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
                      <TableCell>
                        {allAdminJob?.createdAt.split("T")[0]}
                      </TableCell>
                      <TableCell>{allAdminJob?.title}</TableCell>
                      <TableCell>{allAdminJob?.company?.name}</TableCell>
                      <TableCell>{allAdminJob?.location}</TableCell>
                      <TableCell>
                        <Stack spacing={1} direction="row">
                          <JobUpdateModal job={allAdminJob} />
                          <Button onClick={handleDelete(allAdminJob?._id)}>
                            Delete
                          </Button>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          )}
        </section>
      </main>
    </>
  );
};

export default ManageJobs;
