import Singlepost from "./single_post";
import { makeStyles } from "@material-ui/core";

const usestyles = makeStyles((theme) => ({
  single: {
    paddingTop: theme.spacing(10),
  },
}));

const Single = () => {
  const classes = usestyles();
  return (
    <div className={classes.single}>
      <Singlepost />
    </div>
  );
};

export default Single;
