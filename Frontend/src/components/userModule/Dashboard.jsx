import UserNav from "./UserNav";
import Profile from "./Profile";

const Dashboard = (currElm) => {
  const { id, fullname, email, phoneNo } = currElm;
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
