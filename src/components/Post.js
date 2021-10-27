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

const Post = () => {
  const classes = usestyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/6785291/pexels-photo-6785291.jpeg?cs=srgb&dl=pexels-limuel-gonzales-6785291.jpg&fm=jpg"
          title="My post"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            My first post
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            quo nisi cupiditate ea incidunt impedit fugit harum, alias odit
            deleniti, corrupti est minima eligendi ut temporibus quibusdam sunt
            id placeat.
          </Typography>
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
        <Button variant="outlined" size="samll">
          {" "}
          upvote
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
