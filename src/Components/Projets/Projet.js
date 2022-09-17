import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import EyeIcon from "@mui/icons-material/RemoveRedEye";
import Circle from "@mui/icons-material/Circle";

const projets = [
  {
    id: 0,
    img: "http://localhost/israShop/images/4Capture.PNG",
    name: "ecommerce angela-rom",
    cat: "Logo and brang",
    url: "http://localhost/israShop/images/pexels-cottonbro-5329443.jpg",
  },
  {
    id: 1,
    img: "http://localhost/israShop/images/6db79c5f8e05f8aa990323e3c9c172ba.png",
    name: "pexels",
    cat: "Graphique design",
    url: "http://localhost/israShop/images/pexels-angela-roma-7319118_.jpg",
  },
  {
    id: 2,
    img: "http://localhost/israShop/images/fc8e8b96c0af08d2c444164760c7df08.png",
    name: "ecommerce angela-rom",
    cat: "UX/UI Design",
    url: "http://localhost/israShop/images/pexels-cottonbro-5329443.jpg",
  },
  {
    id: 3,
    img: "http://localhost/israShop/images/4Capture.PNG",
    name: "ecommerce angela-rom",
    cat: "mobile developpment",
    url: "http://localhost/israShop/images/pexels-cottonbro-5329443.jpg",
  },
  {
    id: 4,
    img: "http://localhost/israShop/images/6db79c5f8e05f8aa990323e3c9c172ba.png",
    name: "pexels",
    cat: "web development",
    url: "http://localhost/israShop/images/pexels-angela-roma-7319118_.jpg",
  },
  {
    id: 5,
    img: "http://localhost/israShop/images/fc8e8b96c0af08d2c444164760c7df08.png",
    name: "ecommerce angela-rom",
    cat: "logo and brand",
    url: "http://localhost/israShop/images/pexels-cottonbro-5329443.jpg",
  },
];

const Item = ({ img, name, url ,cat}) => {
  return (
    <Grid item xs={12} sm={6} lg={4}>
      <Card
        className="hovercard"
      >
        <a href={url} className="link">
          <CardMedia
            image={img}
            // width={10}
            alt={name}
            component="img"
          />
        </a>
        <CardContent className="">
            <p className="cat">{cat}</p>
            <h1 className="name">{name}</h1>
        </CardContent>
      </Card>
    </Grid>
  );
};

const Nav = () => {
  return (
    <Box className="nav" id="projects">
      <span className="t1">Projets</span> <br />
      <span className="t2">Realisations récentes</span>
    </Box>
  );
};

export default function Projet() {
  return (
    <div className="projets">
      <Nav />
      <Grid container spacing={5}>
        {projets.map((projet) => (
          <Item
            key={projet.id}
            img={projet.img}
            name={projet.name}
            url={projet.url}
            cat={projet.cat}
          />
        ))}
      </Grid>
    </div>
  );
}
