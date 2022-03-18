import { React, useRef } from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  makeStyles,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import axios from "axios";
import { useHistory } from "react-router";

const usestyles = makeStyles((theme) => ({
  paper: {
    paddingTop: theme.spacing(10),
    padding: 20,
    width: 300,
    margin: "20px auto",
  },
}));

const Signup = () => {
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  const classes = usestyles();
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const history = useHistory();
  const handleClick = async (e) => {
    e.preventDefault();

    const user = {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    try {
      const res = await axios.post("/auth/register", user);
      history.push("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Grid>
      <Paper elevation={20} className={classes.paper}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <form onSubmit={handleClick}>
          <TextField
            style={btnstyle}
            fullWidth
            label="Name"
            placeholder="Enter your name"
            required
            inputRef={username}
          />
          <TextField
            style={btnstyle}
            fullWidth
            label="Email"
            placeholder="Enter your email"
            required
            type="email"
            inputRef={email}
          />

          {/* <TextField
            style={btnstyle}
            fullWidth
            label="Phone Number"
            placeholder="Enter your phone number"
          /> */}
          <TextField
            fullWidth
            style={btnstyle}
            label="Password"
            required
            placeholder="Enter your password"
            type="password"
            inputRef={password}
          />
          <TextField
            fullWidth
            style={btnstyle}
            label="Confirm Password"
            required
            minlength="8"
            placeholder="Confirm your password"
            useRef={confirmPassword}
          />
          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="I accept the terms and conditions."
          />
          <Button type="submit" variant="contained" color="primary">
            Sign up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;
