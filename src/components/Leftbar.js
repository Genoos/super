import React from "react";
import { Container, Typography, makeStyles } from "@material-ui/core";
import {
  Home,
  Info,
  Create,
  ContactMail,
  AccountBox,
  ExitToApp,
  Category,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const usestyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    height: "100vh",
    color: "white",
    backgroundColor: theme.palette.primary.light,
    position: "sticky",
    top: 0,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#262626",
      border: "1px solid #ece7e7",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  text: {
    fontWeight: 500,
    fontFamily: "Lora",

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Leftbar = () => {
  const classes = usestyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Info className={classes.icon} />
        <Typography className={classes.text}>About</Typography>
      </div>
      <div className={classes.item}>
          <Home className={classes.icon} />
          <Typography className={classes.text}>Homepage</Typography>
        
      </div>
      <div className={classes.item}>
        <Create className={classes.icon} />
        <Typography className={classes.text}>Write</Typography>
      </div>
      <div className={classes.item}>
        <AccountBox className={classes.icon} />
        <Typography className={classes.text}>Account</Typography>
      </div>
      <div className={classes.item}>
        <ContactMail className={classes.icon} />
        <Typography className={classes.text}>Contact</Typography>
      </div>
      <div className={classes.item}>
        <ExitToApp className={classes.icon} />
        <Typography className={classes.text}>Logout</Typography>
      </div>
    </Container>
  );
};

export default Leftbar;
