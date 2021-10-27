import React from "react";
import { makeStyles, Container } from "@material-ui/core";
import Post from "./Post";

const usestyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const Feed = () => {
  const classes = usestyles();
  return (
    <Container className={classes.container}>
      <Post />
      <Post />
      <Post />
      <Post />
    </Container>
  );
};

export default Feed;
