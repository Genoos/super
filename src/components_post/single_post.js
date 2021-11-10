import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";

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
  return (
    <>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://images.pexels.com/photos/6785291/pexels-photo-6785291.jpeg?cs=srgb&dl=pexels-limuel-gonzales-6785291.jpg&fm=jpg"
            title="My post"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" className={classes.title}>
              My first post
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={classes.content}>
        <Typography variant="h6" align="center" color="blue">
          Author
        </Typography>
        <Typography variant="subtitle1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
          corrupti quisquam minima neque animi, pariatur excepturi temporibus,
          totam dolore perferendis nobis nam at, magnam dicta. Quisquam iste est
          iusto dolorum?
        </Typography>
      </Card>
    </>
  );
};

export default Singlepost;
