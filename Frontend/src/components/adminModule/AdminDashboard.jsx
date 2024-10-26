import React from "react";
import AdminNavigation from "./AdminNavigation";
import Profile from "../userModule/Profile";

const AdminDashboard = () => {
  return (
    <>
      <header>
        <AdminNavigation />
      </header>
      <main>
        <Profile admin={true} />
      </main>
    </>
  );
};

export default AdminDashboard;
