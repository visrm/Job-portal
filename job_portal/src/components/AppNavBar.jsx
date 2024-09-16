import React from "react";
import { AppBar, Toolbar, Typography, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";

const AppNavBar = () => {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{ mr: "auto", fontFamily: "Poppins" }}
          >
            My Products
          </Typography>
          <Stack direction="row" spacing={1}>
            <Link to="/">
              <Button
                variant="contained"
                color="primary"
                sx={{ borderRadius: "1.25rem" }}
              >
                Dashboard
              </Button>
            </Link>
            <Link to="/login">
              <Button
                variant="contained"
                color="primary"
                sx={{ borderRadius: "1.25rem" }}
              >
                Login
              </Button>
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppNavBar;
