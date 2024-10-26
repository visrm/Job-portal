import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { USER_API_END_POINT } from "../../utils/constants";

const API = `${USER_API_END_POINT}/users`;
 
const Profile = ({ admin }) => {
  const [userProfileDetails, setUserProfileDetails] = useState({
    fullname: "John Doe",
    email: "JohnDoe01@email.com",
    phoneNo: 9000000090,
    bio: "about me..."
  });
  const [isAdmin, setIsAdmin] = useState(false);

  const { user } = useSelector((store) => store.auth);

  useEffect(() => {
    setUserProfileDetails({
      fullname: user?.fullname,
      email: user?.email,
      phoneNo: user?.phoneNo,
      bio: user?.profile?.bio
    });
    setIsAdmin(admin);
  }, []);

  return (
    <>
      <section id="profile-section-card">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <h2
            style={{
              fontFamily: "serif",
              paddingBlock: "0",
              margin: "1rem auto 0.75rem auto",
              fontWeight: "700",
              textTransform: "uppercase"
            }}
          >
            Profile
          </h2>
        </div>
        <div id="profile-content">
          <article
            style={{
              fontFamily: "Poppins, sans-serif",
              width: "100%",
              maxWidth: "100%"
            }}
          >
            <div id="fullname">
              <h4 className="profile-details">Full Name</h4>
              {<span>{userProfileDetails.fullname}</span>}
            </div>

            <div id="phoneNo">
              <h4 className="profile-details">Phone Number</h4>
              {<span>{userProfileDetails.phoneNo}</span>}
            </div>

            <div id="email">
              <h4 className="profile-details">E-mail Address</h4>
              {<span>{userProfileDetails.email}</span>}
            </div>

            {!isAdmin && (
              <div id="skills">
                <h4 className="profile-details">Skill Set</h4>
                <p className="skills-array">HTML/CSS, JavaScript, Python</p>
              </div>
            )}
          </article>
        </div>
      </section>
    </>
  );
};

export default Profile;
