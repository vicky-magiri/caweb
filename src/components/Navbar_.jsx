import React, { useState } from "react";

import {  IconButton } from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";

import ClearIcon from "@material-ui/icons/Clear";
import "../styles/navbar_.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNavbar = () => {
    setNavOpen(!navOpen);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  console.log(id, setAnchorEl);
  return (
    <div className="appBar">
      <div className="container navbar">
        <Link onClick={() => setNavOpen(false)} to="/home" className="logo">
          DKUT CC
        </Link>
        <div className={navOpen ? "nav_left open" : "nav_left"}>
          <Link onClick={() => setNavOpen(false)} className="nav_item" to="/events-activities">
            Events
          </Link>
          <Link onClick={() => setNavOpen(false)} className="nav_item" to="/news">
            News
          </Link>         
          <Link onClick={() => setNavOpen(false)} className="nav_item" to="/gallery">
            Gallery
          </Link>
          <Link onClick={() => setNavOpen(false)} className="nav_item" to="/scc">
            SCC
          </Link>
          <Link onClick={() => setNavOpen(false)} className="nav_item" to="/prayers">
            Prayers
          </Link>
          <Link onClick={() => setNavOpen(false)} className="nav_item nav_item_menu" to="/library">Library</Link>
          <Link onClick={() => setNavOpen(false)} className="nav_item nav_item_menu" to="/contact">Contact</Link>
            <Link onClick={() => setNavOpen(false)} className="nav_item nav_item_menu" to="/about">About</Link>
            <Link onClick={() => setNavOpen(false)} className="nav_item nav_item_menu" to="/leadership">Leadership</Link>
            <Link onClick={() => setNavOpen(false)} className="nav_item nav_item_menu" to="/readings">Readings</Link>
          <p className="nav_item menu">
              <span>More+</span>
          <div className="menu-items">
            <Link onClick={() => setNavOpen(false)} className="nav_item" to="/contact">Contact</Link>
            <Link onClick={() => setNavOpen(false)} className="nav_item" to="/about">About</Link>
            <Link onClick={() => setNavOpen(false)} className="nav_item" to="/leadership">Leadership</Link>
            <Link onClick={() => setNavOpen(false)} className="nav_item" to="/readings">Readings</Link>
          </div>
          </p>
        </div>
        <div className="nav_right">
          <button className="login_btn">Login</button>
          <IconButton
            onClick={toggleNavbar}
            edge="start"
            className="menuButton"
            color="inherit"
            aria-label="menu"
          >
            {navOpen ? <ClearIcon /> : <MenuIcon />}
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
