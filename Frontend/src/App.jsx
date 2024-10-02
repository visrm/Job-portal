import { Route, Routes } from "react-router-dom";
import "./App.css";
import LogIn from "./components/LoginHandle/LogIn";
import SignUp from "./components/LoginHandle/SignUp";
import HomePage from "./components/HomePage";
import BrowseJobs from "./userModule/BrowseJobs";
import AppliedJobs from "./userModule/AppliedJobs";
import AdminDashboard from "./adminModule/AdminDashboard";
import ManageJobs from "./adminModule/ManageJobs";
import Dashboard from "./userModule/Dashboard"; 
import UserDashboard from "./userModule/Profile";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/profile" element={<UserDashboard/>}/>
        <Route path="/dashboard/browse-jobs" element={<BrowseJobs />} />
        <Route path="/dashboard/applied-jobs" element={<AppliedJobs />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/manage-jobs" element={<ManageJobs />} />
      </Routes>
    </>
  );
}
