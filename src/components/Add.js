import { React, useRef } from "react";
import {
  makeStyles,
  Fab,
  Tooltip,
  Modal,
  Container,
  TextField,
  InputAdornment,
  MenuItem,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Snackbar,
  PremMedia,
} from "@material-ui/core";
import MuiAlert from "@mui/material/Alert";
import { Add as Addicon, Create } from "@material-ui/icons";
import { useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const usestyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: 20,
    right: 20,
  },
  modal: {},
  container: {
    width: 700,
    height: 920,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    borderRadius: "9px",

    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "100vh",
    },
  },
  form: {
    padding: theme.spacing(2),
  },
}));

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Add = () => {
  const classes = usestyles();
  const [open, setopen] = useState(false);
  const [opensnack, setopensnack] = useState(false);
  const [file, setFile] = useState(null);
  const user = useContext(AuthContext);
  const desc = useRef();
  const title = useRef();
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  // const FileInput = () => {
  //   return <input accept="image/*" type="file" id="select-image" />;
  // };

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      title: e.target.title.value,
      userId: user._id,
      desc: desc.current.value,
      ussername: user.username,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (err) {}
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setopensnack(false);
  };
  return (
    <>
      <Tooltip title="Add" aria-label="add" onClick={() => setopen(true)}>
        <Fab color="primary" className={classes.fab}>
          <Addicon />
        </Fab>
      </Tooltip>
      <Modal open={open} className={classes.modal}>
        <Container className={classes.container}>
          <form
            className={classes.form}
            autoComplete="off"
            onSubmit={submitHandler}
          >
            <div>
              <TextField
                variant="outlined"
                label="Title"
                margin="normal"
                ref={title}
              />
            </div>
            <div>
              <TextField
                id="standard-multiline-static"
                label="Description"
                multiline
                rows={4}
                variant="outlined"
                size="small"
                margin="normal"
                style={{ width: "100%" }}
                ref={desc}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Create />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div>
              <input
                accept="image/*"
                type="file"
                id="select-image"
                style={{ display: "none" }}
              />
              <label htmlFor="select-image">
                <Button
                  variant="contained"
                  color="primary"
                  component="span"
                  onClick={(e) => setFile(e.target.files[0])}
                >
                  Upload Image
                </Button>
              </label>
            </div>
            <div className={classes.item}>
              <TextField
                select
                label="visibility"
                value="public"
                margin="normal"
              >
                <MenuItem value="public">public</MenuItem>
                <MenuItem value="private">private</MenuItem>
              </TextField>
            </div>
            <div className={classes.item}>
              <TextField
                select
                label="Category"
                value="general"
                margin="normal"
              >
                <MenuItem value="General">General</MenuItem>
                <MenuItem value="Science">Science</MenuItem>
                <MenuItem value="Formula1">Formula1</MenuItem>
                <MenuItem value="Education">Education</MenuItem>
              </TextField>
            </div>
            <div className={classes.comments} style={{ marginTop: "28px" }}>
              <FormLabel component="legend">Who can comment</FormLabel>
              <RadioGroup>
                <FormControlLabel
                  value="Everybody"
                  control={<Radio />}
                  label="Everybody"
                />
                <FormControlLabel
                  value="followers"
                  control={<Radio />}
                  label="Followers"
                />
              </RadioGroup>
            </div>
            <div
              className={classes.item}
              style={{ marginTop: "28px", position: "absolute", right: 40 }}
            >
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: "20px" }}
                type="submit"
                onClick={() => setopensnack(true)}
              >
                Post
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setopen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
      <Snackbar
        open={opensnack}
        autoCorrect={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert onClose={handleClose} severity="success">
          posted
        </Alert>
      </Snackbar>
    </>
  );
};

export default Add;
