import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Grid } from "@material-ui/core";
import Feed from "./components/Feed";
import Leftbar from "./components/Leftbar";
import Rightbar from "./components/Rightbar";
import { makeStyles } from "@material-ui/core";
import Add from "./components/Add";

const usestyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const App = () => {
  const classes = usestyles();
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
                <Feed />
              </Grid>
              <Grid item sm={3} className={classes.right}>
                <Rightbar />
              </Grid>
            </Grid>
            <Add />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
