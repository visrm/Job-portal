import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppNavBar from "./components/AppNavBar";
import SignIn from "./components/LoginAcc/SignIn";
import SignUp from "./components/LoginAcc/SignUp";
import HomePage from "./components/HomePage";

export default function App() {
  return (
    <>
      <AppNavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
}