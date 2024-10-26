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
import JobAddForm from "../JobAddForm";
import { JOB_API_END_POINT } from "../../utils/constants";
import axios from "axios";
import { setAllAdminJobs } from "../../redux/slices/jobSlice";

const ManageJobs = () => {
  useGetallAdminJobs();

  const { allAdminJobs } = useSelector((store) => store.job);
  let i = 0;

  const handleDelete = async (itemId) => {
    try {
      const res = await axios.delete(`${JOB_API_END_POINT}/remove/${itemId}`);
      if (res.data.success) {
        console.log(res.data);
        setAllAdminJobs(allAdminJobs.filter((item) => item._id !== itemId));
      }
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
        <section
          style={{
            display: "block",
            height: "100%",
            marginBlockEnd: "2rem",
            marginInline: "auto",
            padding: "1rem 1.5rem"
          }}
        >
          <h2 align="center" style={{ fontFamily: "serif", padding: "1rem" }}>
            MANAGE JOB LISTS
          </h2>
          {allAdminJobs.length >= 0 && (
            <Table
              sx={{
                height: "100%",
                width: "100%",
                maxWidth: "100%",
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
                    <b>Job ID</b>
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
                  <TableCell>
                    <b>Manage Options</b>
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
                      <TableCell>{allAdminJob?._id}</TableCell>
                      <TableCell>{allAdminJob?.title}</TableCell>
                      <TableCell>{allAdminJob?.company?.name}</TableCell>
                      <TableCell>{allAdminJob?.location}</TableCell>
                      <TableCell>
                        <Stack spacing={1} direction="row">
                          <JobUpdateModal job={allAdminJob} />
                          <Button
                            onClick={() => {
                              if (
                                window.confirm(
                                  "Are you sure you want to delete this job?"
                                )
                              ) {
                                let jobId = allAdminJob?._id;
                                handleDelete(jobId);
                                if (handleDelete) window.location.reload();
                              }
                            }}
                          >
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
        <section
          style={{
            display: "block",
            height: "100%",
            marginBlockEnd: "2rem",
            marginInline: "auto"
          }}
        >
          <JobAddForm />
        </section>
      </main>
    </>
  );
};

export default ManageJobs;
