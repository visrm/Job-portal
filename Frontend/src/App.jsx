import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import LogIn from "./components/authHandle/LogIn";
import SignUp from "./components/authHandle/SignUp";
import HomePage from "./components/HomePage";
import BrowseJobs from "./components/userModule/BrowseJobs";
import AppliedJobs from "./components/userModule/AppliedJobs";
import AdminDashboard from "./components/adminModule/AdminDashboard";
import ManageJobs from "./components/adminModule/ManageJobs";
import Profile from "./components/userModule/Profile";
import Dashboard from "./components/userModule/Dashboard";
import ViewApplicants from "./components/adminModule/ViewApplicants";
import ProtectedRoute from "./components/adminModule/ProtectedRoute";
import UserRoute from "./components/userModule/UserRoute";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<SignUp />} />

        {/* User Module */}
        <Route path="/dashboard" element={<UserRoute><Dashboard /></UserRoute>} />
        <Route path="/profile" element={<UserRoute><Profile /></UserRoute>} />
        <Route
          path="/dashboard/profile/:id"
          element={<Navigate to="/profile/:id" />}
        />
        <Route path="/browse-jobs" element={<BrowseJobs />} />
        <Route path="/applied-jobs" element={<UserRoute><AppliedJobs /></UserRoute>} />

        {/* Admin module */}
        <Route path="admin/dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
        <Route path="/manage-jobs" element={<ProtectedRoute><ManageJobs /></ProtectedRoute>} />
        <Route path="jobs/:id/applicants" element={<ProtectedRoute><ViewApplicants /></ProtectedRoute>} />
      </Routes>
    </>
  );
}
