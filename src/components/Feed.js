import React from "react";
import { makeStyles, Container } from "@material-ui/core";
import Post from "./Post";
import { useState, useEffect } from "react";
import axios from "axios";
import Singlepost from "../components_post/single_post";

const usestyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const Feed = () => {
  const classes = usestyles();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("posts/timeline/61a90b093a450fba2bfaf9cf");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);
  return (
    <Container className={classes.container}>
      {posts.map((p) => (
        <Post key={p._id} post={p} />
      ))}
    </Container>
  );
};

export default Feed;
