import { Route, Routes } from "react-router-dom";
import "./App.css";
import LogIn from "./components/LoginHandle/LogIn";
import SignUp from "./components/LoginHandle/SignUp";
import HomePage from "./components/HomePage";
import UserDashboard from "./userModule/UserDashboard";
import BrowseJobs from "./userModule/BrowseJobs";
import AppliedJobs from "./userModule/AppliedJobs";
import AdminDashboard from "./adminModule/AdminDashboard";
import ManageJobs from "./adminModule/ManageJobs";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/browse-jobs" element={<BrowseJobs />} />
        <Route path="/applied-jobs" element={<AppliedJobs />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/manage-jobs" element={<ManageJobs />} />
      </Routes>
    </>
  );
}
