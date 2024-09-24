import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Button,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";

const NavButton = styled(Button)({
  padding: "0.5rem 1rem",
  fontFamily: "Poppins, sans-serif",
  color: "white",
  fontWeight: 600,
  fontKerning: "normal",
  borderRadius: "1.5rem",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: "#0069d9",
  },
  "&:active": {
    backgroundColor: "#0062cc",
  },
});

const AdminNavigation = () => {
  return (
    <>
      <AppBar position="sticky"  sx={{ padding: "0 0.5rem" }}>
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{
              mr: "auto",
              fontFamily: "Poppins, sans-serif",
              fontKerning: "normal",
              fontWeight: "800",
            }}
          >
            Admin Dashboard
          </Typography>
          <Stack direction="row" spacing={0.5}>
            <Link to="/admin/dashboard">
              <NavButton variant="text">Dashboard</NavButton>
            </Link>
            <Link to="/admin/manage-jobs">
              <NavButton variant="text">Manage Jobs</NavButton>
            </Link>
            <NavButton variant="text">LogOut</NavButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AdminNavigation;
