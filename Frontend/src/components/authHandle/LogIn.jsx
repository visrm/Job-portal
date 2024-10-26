import { useState } from "react";
import axios from "axios";
import {
  Button,
  CssBaseline,
  FormControlLabel,
  FormControl,
  TextField,
  Typography,
  Stack,
  RadioGroup,
  Radio
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import MuiCard from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import { USER_API_END_POINT } from "../../utils/constants.js";
import AppNavBar from "../AppNavBar";
// redux feature imports
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "../../redux/slices/userAuthSlice.js";

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
    maxWidth: "450px"
  },
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px"
  })
}));

const LogInContainer = styled(Stack)(({ theme }) => ({
  height: "100%",
  padding: "1rem",
  backdropFilter: "blur(20px)",
  backgroundColor: "whitesmoke",
  minHeight: "90vh",
  fontFamily: "Poppins, sans-serif",
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
        "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))"
    })
  }
}));

const LogIn = () => {
  const [emailError, setEmailError] = useState({ state: false, message: "" });
  const [passwordError, setPasswordError] = useState({
    state: false,
    message: ""
  });
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
    role: "user"
  });

  // react-redux features
  const { loading, user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

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
        message: "Please enter a valid email address."
      });
      isValid = false;
    } else {
      setEmailError({ state: false, message: "" });
    }

    if (!password.value || password.value.length < 8) {
      setPasswordError({
        state: true,
        message: "Password must be at least 8 characters long."
      });
      isValid = false;
    } else {
      setPasswordError({ state: false, message: "" });
    }

    return isValid;
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      dispatch(setLoading(true));
      const loginData = {
        email: inputData.email,
        password: inputData.password,
        role: inputData.role
      };
      const response = await axios.post(
        `${USER_API_END_POINT}/login`,
        loginData,
        {
          headers: {
            "Content-Type": "application/json"
          },
          withCredentials: true
        }
      );
      const isValidEntry = validateInputs();
      if (response.data.success && isValidEntry) {
        dispatch(setUser(response.data.user));
        if (loginData.role == "admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/dashboard");
        }
      }
    } catch (err) {
      console.log(err);
      alert(err.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <>
      <AppNavBar />
      <CssBaseline enableColorScheme />
      <LogInContainer direction="column" justifyContent="space-between">
        <Card variant="outlined" sx={{ backgroundColor: "transparent" }}>
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
              textAlign: "center"
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
              gap: "0.75rem"
            }}
          >
            <FormControl className="auth-form-field">
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
                autoComplete="email"
                required
                fullWidth
                variant="outlined"
                color={emailError.state ? "error" : "primary"}
                sx={{ ariaLabel: "email" }}
                size="small"
              />
            </FormControl>
            <FormControl className="auth-form-field">
              <label htmlFor="password">Password</label>
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
};

export default LogIn;
