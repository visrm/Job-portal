import { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  FormControl,
  TextField,
  Typography,
  Stack,
  RadioGroup,
  Radio,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import MuiCard from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import ForgotPassword from "./ForgotPassword";
import { USER_API_END_POINT } from "../../utils/constants";
import AppNavBar from "../Navigation/AppNavBar";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  borderRadius: "0.75rem",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "450px",
  },
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));

const LogInContainer = styled(Stack)(({ theme }) => ({
  padding: 18,
  backdropFilter: "blur(20px)",
  backgroundColor: "whitesmoke",
  fontFamily: "Poppins, sans-serif",
  marginTop: "7.5vh",
  "&::before": {
    content: '""',
    display: "block",
    position: "absolute",
    zIndex: -1,
    inset: 0,
    backgroundImage:
      "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
    backgroundRepeat: "no-repeat",
    ...theme.applyStyles("dark", {
      backgroundImage:
        "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
    }),
  },
}));

export default function LogIn(props) {
  const [emailError, setEmailError] = useState({ state: false, message: "" });
  const [passwordError, setPasswordError] = useState({
    state: false,
    message: "",
  });
  const [open, setOpen] = useState(false);
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
    role: "user",
  });
  const navigate = useNavigate();

  const handleChange = (event) =>
    setInputData({ ...inputData, [event.target.name]: event.target.value });

  const validateInputs = () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError({
        state: true,
        message: "Please enter a valid email address.",
      });
      isValid = false;
    } else {
      setEmailError({ state: false, message: "" });
    }

    if (!password.value || password.value.length < 8) {
      setPasswordError({
        state: true,
        message: "Password must be at least 8 characters long.",
      });
      isValid = false;
    } else {
      setPasswordError({ state: false, message: "" });
    }

    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("email", inputData.email);
    formData.append("password", inputData.password);
    formData.append("role", inputData.role);
    try {
      const userData = {
        email: formData.get("email"),
        password: formData.get("password"),
        role: formData.get("role"),
      };
      const response = await axios.post(
        `${USER_API_END_POINT}/login`,
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      const isValidEntry = validateInputs();
      if (response.data.success && isValidEntry) {
        navigate("/dashboard");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <AppNavBar />
      <CssBaseline enableColorScheme />
      <LogInContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          <Typography
            component="h1"
            variant="h4"
            sx={{
              width: "100%",
              fontSize: "clamp(2rem, 10vw, 2.15rem)",
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontKerning: "normal",
              color: "transparent",
              backgroundClip: "text",
              backgroundImage:
                "linear-gradient(to right,blue 5%,#1976D2 45%, blue 80%)",
              textAlign: "center",
            }}
          >
            Log in
          </Typography>
          <form
            method="POST"
            id="LogIn_form"
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: "0.75rem",
            }}
          >
            <FormControl>
              <label htmlFor="email">Email</label>
              <TextField
                error={emailError.state}
                helperText={emailError.message}
                id="email"
                type="email"
                name="email"
                value={inputData.email}
                onChange={handleChange}
                placeholder="yourname@email.com"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={emailError.state ? "error" : "primary"}
                sx={{ ariaLabel: "email" }}
                size="small"
              />
            </FormControl>
            <FormControl>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <label htmlFor="password" sx={{ alignSelf: "baseline" }}>
                  Password
                </label>
                <Button
                  onClick={() => {
                    setOpen(true);
                  }}
                  variant="text"
                  sx={{
                    alignSelf: "baseline",
                    textTransform: "lowercase",
                    borderRadius: "1.25rem",
                    p: "0.2rem 0.25rem",
                  }}
                >
                  Forgot your password?
                </Button>
              </Box>
              <TextField
                error={passwordError.state}
                helperText={passwordError.message}
                name="password"
                value={inputData.password}
                onChange={handleChange}
                placeholder="********"
                type="password"
                id="password"
                autoComplete="current-password"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={passwordError.state ? "error" : "primary"}
                size="small"
              />
            </FormControl>
            <FormControl>
              <label htmlFor="Role" className="form-label">
                Role
              </label>
              <RadioGroup
                row
                required
                defaultValue="user"
                onChange={handleChange}
                name="role"
                value={inputData.role}
                id="Role"
              >
                <FormControlLabel
                  value="user"
                  control={<Radio checked={inputData.role === "user"} />}
                  label="Job Seeker"
                />
                <FormControlLabel
                  value="admin"
                  control={<Radio checked={inputData.role === "admin"} />}
                  label="Recruiter"
                />
              </RadioGroup>
            </FormControl>
            <FormControlLabel
              control={
                <Checkbox
                  value="remember"
                  id="remember"
                  color="primary"
                  size="small"
                />
              }
              label="Remember me"
            />
            <ForgotPassword
              open={open}
              handleClose={() => {
                setOpen(false);
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={validateInputs}
            >
              Sign in
            </Button>
            <Typography sx={{ textAlign: "center" }}>
              Don&apos;t have an account?{" "}
              <span>
                <Link to="/register" sx={{ alignSelf: "center" }}>
                  Sign up
                </Link>
              </span>
            </Typography>
          </form>
        </Card>
      </LogInContainer>
    </>
  );
}
