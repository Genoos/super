import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import { Grid } from "@material-ui/core";
import Feed from "./components/Feed";
import Leftbar from "./components/Leftbar";
import Rightbar from "./components/Rightbar";
import { makeStyles } from "@material-ui/core";
import Add from "./components/Add";
import Single from "./components_post/single";
import SignInOutContainer from "./components_login/Sign_up_log_in";
import { useEffect, useState } from "react";
import axios from "axios";
import Profile from "./components_profile/profile";

const usestyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const App = () => {
  const classes = usestyles();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts");

      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Grid container>
              <Grid item sm={2} xs={2}>
                <Leftbar />
              </Grid>
              <Grid item sm={7} xs={10}>
                <Feed posts={posts} />
              </Grid>
              <Grid item sm={3} className={classes.right}>
                <Rightbar />
              </Grid>
            </Grid>
            <Add />
          </Route>
          <Route exact path="/post/:postId">
            <Grid container>
              <Grid item sm={2} xs={2}></Grid>
              <Grid item sm={8} xs={10}>
                <Single />
              </Grid>
              <Grid item sm={2} className={classes.right}></Grid>
            </Grid>
          </Route>
          <Route exact path="/login">
            <SignInOutContainer />
          </Route>
          <Route exact path="/profile">
            <Grid container>
              <Grid item sm={2} xs={2}>
                <Leftbar />
              </Grid>
              <Grid item sm={10} xs={10}>
                <Profile />
                <Feed posts={posts} />
              </Grid>
            </Grid>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
