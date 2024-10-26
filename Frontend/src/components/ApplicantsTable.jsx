import {
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

  var i = 0; // for usage as unique key & Serial Number
  return (
    <>
      <TableContainer sx={{ margin: "0.75rem auto" }}>
      <h4 align="right" style={{
        padding: "0.75rem 1.5rem",
         fontFamily: "serif"
         }}> 
         Total applicant(s) : {applicants?.applications.length}
         </h4>
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
              <TableCell align="center">
                <b>Status Update</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {applicants &&
              applicants?.applications.map((application) => {
                i++;
                return (
                  <TableRow key={application._id}>
                    <TableCell align="center">
                      <b>{i}.</b>
                    </TableCell>
                    <TableCell>{application?.applicant?.fullname}</TableCell>
                    <TableCell>{application?.applicant?.email}</TableCell>
                    <TableCell>{application?.applicant?.phoneNo}</TableCell>
                    <TableCell align="center">
                      {shortlistStatus.map((status, index) => {
                        return (
                          <button
                            key={application?._id - index}
                            variant="outlined"
                            onClick={() =>
                              handleStatus(status, application?._id)
                            }
                            style={{
                              display: "block",
                              width: "100%",
                              textAlign: "center",
                              padding: "0.5rem",
                              margin: "0.5rem",
                              backgroundColor: "rgba(0,0,250, 0.15)",
                              border: "0.1rem",
                              borderRadius: "0.5rem"
                            }}
                          >
                            <span>{status}</span>
                          </button>
                        );
                      })}
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
