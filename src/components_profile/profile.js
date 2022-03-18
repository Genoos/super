import React from "react";
import "./profile.css";
import { makeStyles, Container } from "@material-ui/core";
import Feed from "../components/Feed";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get("/users?username=" + username);
      setUser(res.data);
    };
    fetchUser();
    console.log(user);
  }, []);

  return (
    <>
      <div className="profileCover">
        <img className="profileCoverImg" src={`${PF}/post/3.jpeg`} alt="" />
        <img
          className="profileUserImg"
          src={`${PF}/post/${user.profilePicture}`}
          alt=""
        />
      </div>
      <div className="profileInfo">
        <h4 className="profileInfoName">{user.username}</h4>
      </div>
      <Container>
        <Feed username={"user2"} />
      </Container>
    </>
  );
};

export default Profile;
