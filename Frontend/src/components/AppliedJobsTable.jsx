import { useSelector } from "react-redux";

const AppliedJobsTable = () => {
  const { allAppliedJobs } = useSelector((store) => store.jobs);
  return (
    <>
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
              <b>Date of Application</b>
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
            <TableCell align="center">
              <b>Application Status</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allAppliedJobs.map((appliedJob) => {
            i++;
            return (
              <TableRow key={appliedJob.id}>
                <TableCell>{i}</TableCell>
                <TableCell>{appliedJob?.createdAt}</TableCell>
                <TableCell>{appliedJob?.job?.title}</TableCell>
                <TableCell>{appliedJob?.job?.company?.name}</TableCell>
                <TableCell>{appliedJob?.job?.location}</TableCell>
                <TableCell align="center">
                  <span>{appliedJob?.status}</span>
                </TableCell>
                {console.log(appliedJob)}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default AppliedJobsTable;
