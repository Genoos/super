import {
  Container,
  makeStyles,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const usestyles = makeStyles((theme) => ({
  media: {
    height: 450,
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
  },
  card: {
    marginBottom: theme.spacing(5),
    backgroundColor: "#ffffe6",
  },
  cardactions: {
    backgroundColor: "#ffffb3",
  },
}));

const Post = ({ post }) => {
  const classes = usestyles();
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const [like, setlike] = useState(post.likes);
  const [isliked, setisliked] = useState(false);
  const likehandler = () => {
    setlike(isliked ? like - 1 : like + 1);
    setisliked(!isliked);
  };

  const [user, setuser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const res = axios.get(`users/${post.userId}`);
      setuser(res.data);
    };
    fetchUser();
  }, []);
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <Link to={`post/${post._id}`}>
          <CardMedia
            className={classes.media}
            image={PF + post.Photo}
            title={"My post"}
          />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5">
            {post.title}
          </Typography>
          <Typography variant="body2">{post.description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardactions}>
        <Button variant="outlined" size="samll">
          Share{" "}
        </Button>
        <Button variant="outlined" size="samll">
          {" "}
          comment
        </Button>
        <Button variant="outlined" size="samll" onClick={likehandler}>
          {`${like} likes`}
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
