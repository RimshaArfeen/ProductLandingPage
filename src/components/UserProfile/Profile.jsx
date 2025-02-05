import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './Profile.css';

const Profile = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (

    isAuthenticated && (
        <section className=" w-full" >
      <div className="user-profile">
        <div className="cover-photo w-full">
          <img src="https://wallpapercave.com/wp/wp7107852.jpg" alt="Cover" />
        </div>
        <div className="profile-photo md:ml-10">
          <img src={user.picture} alt="Profile" />
        </div>
        <div className="user-info md:ml-10">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <button
            className="logout-button w-1/4 bg-gray-900 "
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Log Out
          </button>
        </div>
      </div>

        </section>
    )
  );
};

export default Profile;
