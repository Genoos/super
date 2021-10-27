import React from "react";
import {
  Avatar,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { AvatarGroup } from "@mui/material";

const usestyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const Rightbar = () => {
  const classes = usestyles();
  return (
    <Container className={classes.container}>
      <Typography>Other topics</Typography>
      <ImageList sx={{ width: 500, height: 450 }} cols={1}>
        <ImageListItem>
          <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.calacademy.org%2Fsites%2Fdefault%2Ffiles%2Fassets%2Fimages%2FEducation_Images%2FTYE_Images%2Feducatorblog_plasmaglobe_ianstannard2000x1339.jpg&f=1&nofb=1" />

          <ImageListItemBar title={"Science"}></ImageListItemBar>
        </ImageListItem>
        <ImageListItem>
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.JQ2IJIUbWT591VjhhFKW3gHaE8%26pid%3DApi&f=1" />
          <ImageListItemBar title={"Formula 1"}></ImageListItemBar>
        </ImageListItem>
        <ImageListItem>
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.qyqxFmEvAVJI4eFIlyAahAHaFj%26pid%3DApi&f=1" />
          <ImageListItemBar title={"Education"}></ImageListItemBar>
        </ImageListItem>
        <ImageListItem>
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.-qrKGDciawIbKBLSwEnm7AHaHa%26pid%3DApi&f=1" />
          <ImageListItemBar title={"Anime"}></ImageListItemBar>
        </ImageListItem>
        <ImageListItem>
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.-qrKGDciawIbKBLSwEnm7AHaHa%26pid%3DApi&f=1" />
          <ImageListItemBar title={"Anime"}></ImageListItemBar>
        </ImageListItem>
        <ImageListItem>
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.-qrKGDciawIbKBLSwEnm7AHaHa%26pid%3DApi&f=1" />
          <ImageListItemBar title={"Anime"}></ImageListItemBar>
        </ImageListItem>
      </ImageList>
    </Container>
  );
};

export default Rightbar;
