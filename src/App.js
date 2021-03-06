import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar";

import { Grid } from "@material-ui/core";
import Feed from "./components/Feed";
import Leftbar from "./components/Leftbar";
import Rightbar from "./components/Rightbar";
import { makeStyles } from "@material-ui/core";
import Add from "./components/Add";
import Single from "./components_post/single";
import SignInOutContainer from "./components_login/Sign_up_log_in";
import { useContext } from "react";

import Profile from "./components_profile/profile";
import { AuthContext } from "./context/AuthContext";

const usestyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const App = () => {
  const classes = usestyles();
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const res = await axios.get("/posts");

  //     setPosts(res.data);
  //   };
  //   fetchPosts();
  // }, []);
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            {user ? (
              <>
                <Navbar />
                <Grid container>
                  <Grid item sm={2} xs={2}>
                    <Leftbar />
                  </Grid>
                  <Grid item sm={7} xs={10}>
                    <Feed />
                  </Grid>
                  <Grid item sm={3} className={classes.right}>
                    <Rightbar />
                  </Grid>
                </Grid>
                <Add />
              </>
            ) : (
              <SignInOutContainer />
            )}
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
            {user ? <Redirect to="/" /> : <SignInOutContainer />}
          </Route>
          <Route exact path="/profile/:username">
            <Grid container>
              <Grid item sm={2} xs={2}>
                <Leftbar />
              </Grid>
              <Grid item sm={10} xs={10}>
                <Profile />
              </Grid>
            </Grid>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
