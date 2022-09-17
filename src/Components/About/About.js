import { Grid, Paper, Box } from "@mui/material";
import React from "react";
import img1 from "../../Assets/Images/image 2-100.jpg";

export default function About() {
  return (
    <Box className="main_ab" id="about">
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <picture>
            <img src={img1} alt="" className="img" />
          </picture>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper variant="">
            <Box className="txt_box">
              <span className="t1">About me</span>
              <br />
              <span className="t2">
                Meilleurs consultation
                <br /> experience de qualite
              </span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate laboriosam doloribus in illo quia architecto
                praesentium tempora accusamus hic repellendus eveniet facere rem
                voluptates dolorem neque, inventore illum nostrum vel.
              </p>
              <a href="/" className="btn2">
                donwload my cv
              </a>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
