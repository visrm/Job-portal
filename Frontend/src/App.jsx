import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import LogIn from "./components/authHandle/LogIn";
import SignUp from "./components/authHandle/SignUp";
import HomePage from "./components/HomePage";
import BrowseJobs from "./components/userModule/BrowseJobs";
import AppliedJobs from "./components/userModule/AppliedJobs";
import AdminDashboard from "./components/adminModule/AdminDashboard";
import AdminProfile from "./components/adminModule/AdminProfile";
import ManageJobs from "./components/adminModule/ManageJobs";
import Profile from "./components/userModule/Profile";
import Dashboard from "./components/userModule/Dashboard";
import ViewApplicants from "./components/adminModule/ViewApplicants";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<SignUp />} />

        {/* User Module */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/dashboard/profile/:id"
          element={<Navigate to="/profile/:id" />}
        />
        <Route path="/browse-jobs" element={<BrowseJobs />} />
        <Route path="/applied-jobs" element={<AppliedJobs />} />

        {/* Admin module */}
        <Route path="admin">
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="profile" element={<AdminProfile />} />
          <Route path="manage-jobs" element={<ManageJobs />} />
          <Route path="jobs/:id/applicants" element={<ViewApplicants/>}/>
        </Route>
       
        
      </Routes>
    </>
  );
}
