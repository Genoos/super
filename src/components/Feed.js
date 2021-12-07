import React from "react";
import { makeStyles, Container } from "@material-ui/core";
import Post from "./Post";
import { useState, useEffect } from "react";
import axios from "axios";

const usestyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const Feed = ({}) => {
  const classes = usestyles();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = axios.get("posts/timeline/61ae3f768a832c30d18d9bf6");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);
  return (
    <Container className={classes.container}>
      {/* {profile? posts.map((p)=>(
        p.userId === profile && <Post post={p}/>
      )):
      posts.map((p) => (
        <Post post={p} />
      ))} */}
      {posts.map((p) => {
        <Post key={p.id} post={p} />;
      })}
    </Container>
  );
};

export default Feed;
