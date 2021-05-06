import {
  Button,
  CardMedia,
  Container,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { React, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
// import "./Navbar.css";
import "./Navbar.scss";
import Dropdown from "./Dropdown";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import InputBase from "@material-ui/core/InputBase";
import logo from "../../../assets/images/Islamic ad.png";
import Login from "../../Auth/Login/Login";
import SmsIcon from "@material-ui/icons/Sms";
import DashboardDrawer from "../SecondMenu/MenuDowar";
const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "200px",
    border: "1px solid #5c6677",
    ["@media (max-width:860px)"]: {
      width: "250px",
      margin: "20px 0",
    },
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

const drawarMenu = (
  <List component="nav" aria-label="main mailbox folders">
    <ListItem button>
      <ListItemIcon>
        <SmsIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SmsIcon />
      </ListItemIcon>
      <ListItemText primary="About" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SmsIcon />
      </ListItemIcon>
      <ListItemText primary="Dropdown menu" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SmsIcon />
      </ListItemIcon>
      <ListItemText primary="feedback" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SmsIcon />
      </ListItemIcon>
      <ListItemText primary="contact" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SmsIcon />
      </ListItemIcon>
      <ListItemText primary="All ads" />
    </ListItem>
  </List>
);

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
              <Hidden mdUp>
                <DashboardDrawer>{drawarMenu}</DashboardDrawer>
              </Hidden>
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
              <div
                style={{
                  paddingRight: "5px",
                  display: "flex",
                }}
                className="small_device"
              >
                {/* <div
                  className={classes.search}
                  style={{ width: "150px", marginRight: "6px" }}
                  id="locationInput"
                >
                  <InputBase
                    placeholder="Location"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ "aria-label": "Location" }}
                  />
                  <div className={classes.searchIcon}>
                    <LocationOnIcon color="primary" />
                  </div>
                </div> */}
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
                    <SearchIcon color="primary" />
                  </div>
                </div>
              </div>

              <div
                style={{ display: "flex", alignItems: "center" }}
                className="small_device"
              >
                <li className="customMenu">
                  <Link activeClassName="activeRoute" onClick={() => null}>
                    <Login />
                  </Link>
                </li>
                <li className="customMenu">
                  <NavLink activeClassName="activeRoute" to="/chat">
                    <SmsIcon />
                  </NavLink>
                </li>
                <li className="customMenu">
                  <Dropdown />
                </li>
                {/* <Link to="/createAds" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{ borderRadius: "20px", padding: "8px 15px" }}
                  >
                    <AddIcon /> Post an Ad
                  </Button>
                </Link> */}
                {/* <Link
                  to="/adsCreate"
                  style={{ marginLeft: "10px", textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    style={{
                      borderRadius: "20px",
                      padding: "8px 15px",
                      backgroundColor: "#3f4fd6",
                      color: "#fff",
                    }}
                    className="common_Button"
                  >
                    <AddIcon /> Post an Ad
                  </Button>
                </Link> */}

                <Link
                  to="/adsCreate"
                  style={{ marginLeft: "10px", textDecoration: "none" }}
                >
                  <Button
                    variant="outlined"
                    // style={{
                    //   borderRadius: "20px",
                    //   padding: "8px 15px",
                    //   backgroundColor: "#3f4fd6",
                    //   color: "#fff",
                    // }}
                    className="cta"
                  >
                    <span>
                      <AddIcon /> Post an Ad
                    </span>
                    {/* <svg width="13px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg> */}
                  </Button>
                </Link>
              </div>
            </ul>
          </nav>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
