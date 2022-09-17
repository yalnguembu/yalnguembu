import { Grid, IconButton, Typography, Box } from "@mui/material";
import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Image1 from "../../Assets/Images/moi u.png";

export default function Header() {
  const [text, setText] = useState("Devellopeur");
  // const texts = ['developpeur', 'designer', 'tradeur forex', 'analyste des SI']

  // const handeltext = () => {
  //     texts.forEach(element => {
  //         setTimeout(setText(element), 500);
  //     });

  //     handeltext()
  // }
  // useEffect(handeltext, [])

  return (
    <div>
      <Box className="main_hd">
        <Grid container direction="row-reverse">
          <Grid item xs={12} md={6} lg={6}>
            <Box className="box_img">
              <Box className="box_2">
                <img
                  src={Image1}
                  className="img"
                  alt="oups erreur de chargement"
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Box className="box_txt">
              <Typography className="h1">
                Salut je suis <br /> Yal Nguembu
              </Typography>
              <p className="signature">Developpeur, Designer graphique</p>
              <br/>
              <Box className="box_btn">
                <a href="#contact" className="btn">
                  Contactez moi
                </a>
                <a href="#contact" className="btn2">
                  Telecharger CV
                </a>
              </Box>
              
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
