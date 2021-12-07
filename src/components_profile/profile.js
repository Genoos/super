import React from "react";
import "./profile.css";

const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <div className="profileCover">
        <img className="profileCoverImg" src={`${PF}/post/3.jpeg`} alt="" />
        <img className="profileUserImg" src={`${PF}person/3.jpeg`} alt="" />
      </div>
      <div className="profileInfo">
        <h4 className="profileInfoName">Safak Kocaoglu</h4>
      </div>
    </>
  );
};

export default Profile;
