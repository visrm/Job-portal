import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Button,
  styled
} from "@mui/material";
import { Link, useNavigate} from "react-router-dom";
import { USER_API_END_POINT } from "../../utils/constants.js";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setLoading, setUser } from "../../redux/slices/userAuthSlice.js";

const NavButton = styled(Button)({
  padding: "0.5rem 1rem",
  fontFamily: "Poppins, sans-serif",
  color: "white",
  fontWeight: 600,
  fontKerning: "normal",
  borderRadius: "1.5rem",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: "#0069d9"
  },
  "&:active": {
    backgroundColor: "#0062cc"
  }
});

const AdminNavigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const logOutHandle = async () => {
    try {
      dispatch(setLoading(true))
      const response = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true
      });
      if (response.data.success) {
        dispatch(setUser(null));
        navigate("/");
      } else {
        console.log("failed to logOut.");
      }
    } catch (error) {
      console.log(error);
    }finally {
      dispatch(setLoading(false))
    }
  };

  return (
    <>
      <AppBar position="sticky" sx={{ padding: "0 0.5rem" }}>
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{
              mr: "auto",
              fontFamily: "Poppins, sans-serif",
              fontKerning: "normal",
              fontWeight: "800"
            }}
          >
            Admin Dashboard
          </Typography>
          <Stack direction="row" spacing={0.5}>
            <Link to="/admin/dashboard">
              <NavButton variant="text">Dashboard</NavButton>
            </Link>
            <Link to="/manage-jobs">
              <NavButton variant="text">Manage Jobs</NavButton>
            </Link>
              <NavButton variant="text" onClick={()=>{
                var id = prompt("Enter jobID for application :")
                if(id) navigate(`/jobs/${id}/applicants`)
                else return
              }}>View Applicants</NavButton>
            <NavButton onClick={logOutHandle} variant="text">
              LogOut
            </NavButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AdminNavigation;
