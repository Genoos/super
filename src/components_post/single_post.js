import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const usestyles = makeStyles((theme) => ({
  media: {
    height: 550,
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
  },
  card: {
    marginBottom: theme.spacing(5),
    backgroundColor: "#ffffe6",
  },
  title: {
    alignItems: "center",
    textAlign: "center",
  },
}));

const Singlepost = () => {
  const classes = usestyles();
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
    };
    getPost();
  }, [path]);

  const [user, setuser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const res = axios.get(`users/${post.userId}`);
      setuser(res.data);
    };
    fetchUser();
  }, []);
  return (
    <>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={PF + "post/" + post.Photo}
            title="My post"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" className={classes.title}>
              {post.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={classes.content}>
        <Typography variant="h6" align="center" color="blue">
          {post.userId}
        </Typography>
        <Typography variant="subtitle1">{post.description}</Typography>
      </Card>
    </>
  );
};

export default Singlepost;
