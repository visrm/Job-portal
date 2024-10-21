import AdminNavigation from "./AdminNavigation.jsx";
// redux feature import
import { useDispatch } from "react-redux";
import axios from "axios";
import { APPLICATION_API_END_POINT } from "../../utils/constants.js";
import { setAllApplicants } from "../../redux/slices/applicationSlice.js";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ApplicantsTable from "../ApplicantsTable.jsx";
import { TextField } from "@mui/material";

const ViewApplicants = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    (async function FetchAllApplicants() {
      try {
        const res = await axios.get(
          `${APPLICATION_API_END_POINT}/${id}/applicants`,
          { withCredentials: true }
        );
        if (res.data.success) {
          dispatch(setAllApplicants(res.data.job));
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
      <header>
        <AdminNavigation />
      </header>
      <main>
        <div>
          <h2
            align="center"
            style={{ fontFamily: "serif", textTransform: "uppercase" }}
          >
            Applications
          </h2>
          <ApplicantsTable />
        </div>
      </main>
    </div>
  );
};

export default ViewApplicants;
