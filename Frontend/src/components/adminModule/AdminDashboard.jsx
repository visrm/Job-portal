import React from "react";
import AdminNavigation from "./AdminNavigation";
import Profile from "../userModule/Profile";
import Jobs from "../Jobs";

const AdminDashboard = () => {
  return (
    <>
      <header>
        <AdminNavigation />
      </header>
      <main>
        <Profile />
      </main>
    </>
  );
};

export default AdminDashboard;
