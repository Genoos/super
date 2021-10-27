import { createTheme } from "@material-ui/core";
import { blue, yellow } from "@material-ui/core/colors";

export const theme = createTheme({
  palette: {
    primary: { main: yellow[500] },
  },
  myButton: {
    backgroundColor: "red",
    color: "white",
    bordr: "1px solid black",
  },
});
