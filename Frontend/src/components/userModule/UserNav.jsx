import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Button,
  styled
} from "@mui/material";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { USER_API_END_POINT } from "../../utils/constants.js";
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

const UserNav = () => {
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
            Job Portal
          </Typography>
          <Stack direction="row" spacing={0.5}>
            <NavLink to="/dashboard">
              <NavButton variant="text">Dashboard</NavButton>
            </NavLink>
            <NavLink to="/browse-jobs">
              <NavButton variant="text">Browse Jobs</NavButton>
            </NavLink>
            <NavLink to="/applied-jobs">
              <NavButton variant="text">Applied Jobs</NavButton>
            </NavLink>
            <NavButton onClick={logOutHandle}>Log Out</NavButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default UserNav;
