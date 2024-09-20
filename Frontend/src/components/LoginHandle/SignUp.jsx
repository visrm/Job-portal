import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  FormLabel,
  FormControl,
  TextField,
  Select,
  MenuItem,
  Typography,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";
import MuiCard from "@mui/material/Card";
import { styled } from "@mui/material/styles";

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
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [phoneNoError, setphoneNoError] = useState(false);
  const [phoneNoErrorMessage, setphoneNoErrorMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [role, setRole] = useState("user");

  const handleChange = (event) => setRole(event.target.value);

  const validateInputs = () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const fullname = document.getElementById("fullname");
    const phoneNo = document.getElementById("phoneNo");

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }

    if (!password.value || password.value.length < 8) {
      setPasswordError(true);
      setPasswordErrorMessage("Password must be at least 8 characters long.");
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }

    if (!fullname.value || fullname.value.length < 1) {
      setNameError(true);
      setNameErrorMessage("Name is required.");
      isValid = false;
    } else {
      setNameError(false);
      setNameErrorMessage("");
    }

    if (!phoneNo.value || phoneNo.value.length < 1) {
      setphoneNoError(true);
      setphoneNoErrorMessage("Phone Number is required.");
      isValid = false;
    } else {
      setphoneNoError(false);
      setphoneNoErrorMessage("");
    }

    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get("fullname"),
      email: data.get("email"),
      password: data.get("password"),
      role: data.get("role"),
    });
  };

  return (
    <>
      <CssBaseline enableColorScheme />
      <SignUpContainer direction="column" justifyContent="space-between">
        <Stack
          sx={{
            justifyContent: "center",
            height: "100dvh",
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
            <Box
              component="form"
              id="signUp_form"
              onSubmit={handleSubmit}
              sx={{ display: "flex", flexDirection: "column", gap: 1 }}
            >
              <FormControl>
                <FormLabel className="form-label" htmlFor="fullname">
                  Full name
                </FormLabel>
                <TextField
                  autoComplete="name"
                  name="fullname"
                  required
                  fullWidth
                  id="fullname"
                  placeholder="John Doe "
                  error={nameError}
                  helperText={nameErrorMessage}
                  color={nameError ? "error" : "primary"}
                  size="small"
                />
              </FormControl>
              <FormControl>
                <FormLabel className="form-label" htmlFor="phoneNo">
                  Phone Number
                </FormLabel>
                <TextField
                  required
                  fullWidth
                  name="phoneNo"
                  placeholder="+91"
                  type="password"
                  id="phoneNo"
                  variant="outlined"
                  error={phoneNoError}
                  helperText={phoneNoErrorMessage}
                  color={phoneNoError ? "error" : "primary"}
                  size="small"
                />
              </FormControl>
              <FormControl>
                <FormLabel className="form-label" htmlFor="email">
                  Email
                </FormLabel>
                <TextField
                  required
                  fullWidth
                  id="email"
                  placeholder="yourname@email.com"
                  name="email"
                  autoComplete="email"
                  variant="outlined"
                  error={emailError}
                  helperText={emailErrorMessage}
                  color={passwordError ? "error" : "primary"}
                  size="small"
                />
              </FormControl>
              <FormControl>
                <FormLabel className="form-label" htmlFor="password">
                  Password
                </FormLabel>
                <TextField
                  required
                  fullWidth
                  name="password"
                  placeholder="********"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  variant="outlined"
                  error={passwordError}
                  helperText={passwordErrorMessage}
                  color={passwordError ? "error" : "primary"}
                  size="small"
                />
              </FormControl>
              <FormControl>
                <FormLabel className="form-label" id="role-label">
                  Role
                </FormLabel>
                <Select
                  required
                  value={role}
                  onChange={handleChange}
                  displayEmpty
                  name="role"
                  id="role"
                  labelId="role-label"
                  type="select"
                  inputProps={{ "aria-label": "Without label" }}
                  size="small"
                >
                  <MenuItem value="user">Job Seeker</MenuItem>
                  <MenuItem value="admin">Recruiter</MenuItem>
                </Select>
              </FormControl>
              &nbsp;
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
            </Box>
          </Card>
        </Stack>
      </SignUpContainer>
    </>
  );
}
