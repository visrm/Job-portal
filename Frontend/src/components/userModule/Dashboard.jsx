import UserNav from "./UserNav";
import Profile from "./Profile";

const Dashboard = () => {
  return (
    <>
      <header>
        <UserNav />
      </header>
      <main>
        <Profile />
      </main>
    </>
  );
};

export default Dashboard;
