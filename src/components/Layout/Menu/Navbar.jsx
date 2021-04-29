import { Button, CardMedia, Container } from "@material-ui/core";
import { React, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
// import "./Navbar.css";
import "./Navbar.scss";
import Dropdown from "./Dropdown";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import logo from "../../../assets/images/Islamic ad.png";
import Login from "../../Auth/Login/Login";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    border: "1px solid #5c6677",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    position: "absolute",
    top: "8px",
    right: "0",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: "12px",
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li:not(#exceptMenu)");

    hamburger.addEventListener("click", () => {
      // Animate Links
      navLinks.classList.toggle("open");

      links.forEach((link) => {
        link.classList.toggle("fade");
      });
      // Hamburger Animation
      hamburger.classList.toggle("toggle");
    });

    links.forEach((link) =>
      link.addEventListener("click", () => {
        // Animate Links
        navLinks.classList.toggle("open");

        links.forEach((linked) => {
          linked.classList.toggle("fade");
        });
        // Hamburger Animation
        hamburger.classList.toggle("toggle");
      })
    );

    window.addEventListener("resize", (event) => {
      if (event.target.innerWidth < 860) {
        navLinks.classList.remove("open");
        links.forEach((link) => {
          link.classList.remove("fade");
        });
        hamburger.classList.remove("toggle");
      }
    });
  }, []);
  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="topNavContainer">
        <Container style={{ zIndex: "9999999" }}>
          <nav id="topNav">
            <div
              className="logo"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Link to="/">
                <CardMedia
                  component="img"
                  image={logo}
                  alt="logo"
                  style={{ width: "70px" }}
                />
              </Link>
            </div>
            <div className="hamburger">
              <div className="line1" />
              <div className="line2" />
              <div className="line3" />
            </div>

            <ul className="nav-links">
              <div>
                <div className={classes.search}>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ "aria-label": "search" }}
                  />
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center" }}>
                <li className="customMenu">
                  <Link activeClassName="activeRoute" onClick={() => null}>
                    <Login />
                  </Link>
                </li>
                <li className="customMenu">
                  <NavLink activeClassName="activeRoute" to="/chat">
                    Chat
                  </NavLink>
                </li>
                <li className="customMenu">
                  <Dropdown />
                </li>
                <Button variant="contained" color="primary">
                  <AddIcon /> Post an Ad
                </Button>
              </div>
            </ul>
          </nav>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
