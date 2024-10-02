import { useState } from "react";
import axios from "axios";
import {
  Button,
  CssBaseline,
  FormControl,
  TextField,
  Typography,
  Stack,
  Box,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import MuiCard from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import { USER_API_END_POINT } from "../../utils/constants.js";
import AppNavBar from "../Navigation/AppNavBar.jsx";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  borderRadius: "0.75rem",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  [theme.breakpoints.up("sm")]: {
    width: "450px",
  },
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
  height: "100%",
  padding: 3,
  backdropFilter: "blur(20px)",
  backgroundColor: "whitesmoke",
  fontFamily: "Poppins, sans-serif",
  backgroundImage:
    "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
  backgroundRepeat: "no-repeat",
  ...theme.applyStyles("dark", {
    backgroundImage:
      "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
  }),
}));

export default function SignUp() {
  const [emailError, setEmailError] = useState({ state: false, message: "" });
  const [passwordError, setPasswordError] = useState({
    state: false,
    message: "",
  });
  const [phoneNoError, setPhoneNoError] = useState({
    state: false,
    message: "",
  });
  const [nameError, setNameError] = useState({ state: false, message: "" });
  const [inputData, setInputData] = useState({
    fullname: "",
    phoneNo: "",
    email: "",
    password: "",
    role: "user",
  });

  const navigate = useNavigate();
  const handleChange = (event) => {
    setInputData({ ...inputData, [event.target.name]: event.target.value });
  };

  const validateInputs = () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const fullname = document.getElementById("fullname");
    const phoneNo = document.getElementById("phoneNo");

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

    if (!fullname.value || fullname.value.length < 1) {
      setNameError({ state: true, message: "Name is required." });
      isValid = false;
    } else {
      setNameError({ state: false, message: "" });
    }

    let isNotValidNumber = isNaN(phoneNo.value);
    if (!phoneNo.value || isNotValidNumber || phoneNo.value.length < 10) {
      setPhoneNoError({
        state: true,
        message: "Valid Phone Number is required.",
      });
      isValid = false;
    } else {
      setPhoneNoError({ state: false, message: "" });
    }

    return isValid;
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      let userData = {
        fullname: inputData.fullname,
        phoneNo: inputData.phoneNo,
        email: inputData.email,
        password: inputData.password,
        role: inputData.role,
      };
      const response = await axios.post(
        `${USER_API_END_POINT}/register`,
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      const isValidEntry = validateInputs();
      while (response.data.success && isValidEntry) {
        navigate("/login");
        break;
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <AppNavBar />
      <CssBaseline enableColorScheme />
      <SignUpContainer direction="column" justifyContent="space-between">
        <Stack
          sx={{
            justifyContent: "center",
            height: "90dvh",
            p: 1,
          }}
        >
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
              Sign up
            </Typography>
            <Box component="div">
              <form
                method="POST"
                id="signUp_form"
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  gap: "0.75rem",
                }}
              >
                <FormControl>
                  <label className="form-label" htmlFor="fullname">
                    Full name
                  </label>
                  <TextField
                    name="fullname"
                    value={inputData.fullname}
                    required
                    fullWidth
                    id="fullname"
                    placeholder="John Doe "
                    onChange={handleChange}
                    error={nameError.state}
                    helperText={nameError.message}
                    color={nameError.state ? "error" : "primary"}
                    size="small"
                  />
                </FormControl>
                <FormControl>
                  <label className="form-label" htmlFor="phoneNo">
                    Phone Number
                  </label>
                  <TextField
                    required
                    fullWidth
                    name="phoneNo"
                    value={inputData.phoneNo}
                    placeholder="+91"
                    type="text"
                    id="phoneNo"
                    variant="outlined"
                    onChange={handleChange}
                    error={phoneNoError.state}
                    helperText={phoneNoError.message}
                    color={phoneNoError.state ? "error" : "primary"}
                    size="small"
                  />
                </FormControl>
                <FormControl>
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    placeholder="yourname@email.com"
                    name="email"
                    value={inputData.email}
                    variant="outlined"
                    onChange={handleChange}
                    error={emailError.state}
                    helperText={emailError.message}
                    color={emailError.state ? "error" : "primary"}
                    size="small"
                  />
                </FormControl>
                <FormControl>
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    value={inputData.password}
                    placeholder="********"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    variant="outlined"
                    onChange={handleChange}
                    error={passwordError.state}
                    helperText={passwordError.message}
                    color={passwordError.state ? "error" : "primary"}
                    size="small"
                  />
                </FormControl>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  onClick={validateInputs}
                >
                  Sign up
                </Button>
                <Typography sx={{ textAlign: "center" }}>
                  Already have an account?{" "}
                  <span>
                    <Link
                      to="/login"
                      variant="body2"
                      sx={{ alignSelf: "center" }}
                    >
                      Log in
                    </Link>
                  </span>
                </Typography>
              </form>
            </Box>
          </Card>
        </Stack>
      </SignUpContainer>
    </>
  );
}
