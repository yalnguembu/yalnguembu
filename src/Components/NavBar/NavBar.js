import React, { useState } from "react";
import DownloadIcon from "@mui/icons-material/Download";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../Assets/Images/logo horizontal.png";
import { IconButton } from "@mui/material";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const handelOpen = () => {
    setOpen(!open);
  };
  return (
    <nav className="navbar" id="navbar">
      <ul className={open ? "NavBar resp" : "NavBar"}>
        {/* <li style="float: right;">
          <button className="btn bg-white " id="btnNavbar">
            <i className=" bi-list text-sm"></i>
          </button>
        </li> */}
        <li className="secret">
          {" "}
          <IconButton onClick={handelOpen}>
            <MenuIcon className="iconSecret" />
          </IconButton>{" "}
        </li>
        <li>
          <a href="/" className="a img">
            <img src={logo} className="img" alt="logo" />
          </a>{" "}
        </li>
        <li>
          <a href="#services" className="a">
            Services
          </a>{" "}
        </li>
        <li>
          <a href="#about" className="a">
            A propos
          </a>
        </li>
        <li>
          <a href="#skill" className="a">
            Competences
          </a>
        </li>
        <li>
          <a href="#projects" className="a">
            PortFolio
          </a>
        </li>
        <li>
          <a href="#testimonie" className="a">
            Teimoignages
          </a>
        </li>
        <li style={{float:"right"}}>
          <a href="/pdf/CV-NGUEMBU_FOTSO_Yal_Jovane.pdf" className="a">
            <DownloadIcon className="icon" /> Telecharger mon CV
          </a>
        </li>
      </ul>
    </nav>
  );
}
