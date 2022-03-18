// import { makeStyles,Modal } from "@material-ui/core";
// import { AccountCircle } from "@material-ui/icons";

// const usestyles = makeStyles((theme) => ({

//   }));

// const Login=()=>{
//     const [open, setopen] = useState(false);
//     return (
//         <Modal open={open} className={classes.modal}>
//             <container className={classes.container}>
//                 <form className={classes.form} autoComplete="off">
//                     <div>
//                         <AccountCircle/>
//                     </div>
//                 </form>
//             </container>
//         </Modal>
//     )
// }

// export default Login;

import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  makeStyles,
  Container,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
//import FormControlLabel from "@material-ui/core/FormControlLabel";
import { CircularProgress, FormControlLabel } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import { useRef, useContext } from "react";
import { loginCall } from "../apiCalls";
import { AuthContext } from "../context/AuthContext";

const usestyles = makeStyles((theme) => ({
  paper: {
    paddingTop: theme.spacing(10),
    padding: 20,
    height: "50vh",
    width: 280,
    margin: "20px auto",
  },
}));

const Login = () => {
  const email = useRef();
  const password = useRef();
  const classes = usestyles();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
    console.log(email.current.value);
  };

  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "10px 0" };
  return (
    <Grid>
      <Paper className={classes.paper} elevation={10}>
        <form onSubmit={handleClick}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign In</h2>
          </Grid>
          <TextField
            label="Username"
            placeholder="Enter email"
            fullWidth
            required
            style={btnstyle}
            inputRef={email}
            type={email}
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
            minlength="8"
            style={btnstyle}
            inputRef={password}
          />
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
            style={btnstyle}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
          >
            {isFetching ? <CircularProgress size="25px" /> : "Login"}
          </Button>
          <Typography>
            <Link href="#">Forgot password ?</Link>
          </Typography>
          <Typography style={btnstyle}>
            {" "}
            Do you have an account ?<Link href="#">Sign Up</Link>
          </Typography>
        </form>
      </Paper>
    </Grid>
  );
};

export default Login;
