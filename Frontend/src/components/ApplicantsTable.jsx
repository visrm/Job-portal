import {
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import axios from "axios";
import { useSelector } from "react-redux";
import { APPLICATION_API_END_POINT } from "../utils/constants";

const ApplicantsTable = () => {
  const shortlistStatus = ["accepted", "rejected"];
  const { applicants } = useSelector((store) => store.application);

  const handleStatus = async (status, id) => {
    try {
      const res = await axios.post(
        `${APPLICATION_API_END_POINT}/status/${id}/update`,
        { status },
        {
          headers: {
            "Content-Type": "application/json"
          },
          withCredentials: true
        }
      );
      if (res.data.success) {
        alert(res.data.application.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  let i = 0;
  return (
    <>
      <TableContainer sx={{ margin: "0.75rem auto" }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <b>S.No</b>
              </TableCell>
              <TableCell>
                <b>Name</b>
              </TableCell>
              <TableCell>
                <b>Email</b>
              </TableCell>
              <TableCell>
                <b>Contact</b>
              </TableCell>
              <TableCell align="center"> </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {applicants &&
              applicants?.applications.map((application) => {
                i++;
                return (
                  <TableRow key={application.id}>
                    <TableCell align="center">
                      <b>{i}.</b>
                    </TableCell>
                    <TableCell>{application?.applicant?.fullname}</TableCell>
                    <TableCell>{application?.applicant?.email}</TableCell>
                    <TableCell>{application?.applicant?.phoneNo}</TableCell>
                    <TableCell align="right">
                      <Stack spacing={1} sx={{ maxWidth: "20ch" }}>
                        {shortlistStatus.map((status, index) => {
                          return (
                            <Button
                              variant="outlined"
                              onClick={() =>
                                handleStatus(status, application?._id)
                              }
                              key={index}
                            >
                              <span>{status}</span>
                            </Button>
                          );
                        })}
                      </Stack>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ApplicantsTable;
