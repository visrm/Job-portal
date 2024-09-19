import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppNavBar from "./components/AppNavBar";
import LogIn from "./components/LoginHandle/LogIn";
import SignUp from "./components/LoginHandle/SignUp";
import HomePage from "./components/HomePage";

export default function App() {
  return (
    <>
      <AppNavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
}