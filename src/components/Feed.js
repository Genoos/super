import React, { useContext } from "react";
import { makeStyles, Container } from "@material-ui/core";
import Post from "./Post";
import { useState, useEffect } from "react";
import axios from "axios";
import Singlepost from "../components_post/single_post";
import { AuthContext } from "../context/AuthContext";

const usestyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(20),
  },
}));

const Feed = ({ username }) => {
  const classes = usestyles();
  const [posts, setPosts] = useState([]);
  const user = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("/posts/timeline/" + user._id);
      setPosts(res.data);
    };
    fetchPosts();
    console.log(posts);
  }, [username, user._id]);
  return (
    <Container className={classes.container}>
      {posts.map((p) => (
        <Post key={p._id} post={p} />
      ))}
    </Container>
  );
};

export default Feed;
