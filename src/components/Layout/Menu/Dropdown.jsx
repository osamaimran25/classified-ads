import React from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Divider from "@material-ui/core/Divider";
import LockIcon from "@material-ui/icons/Lock";
import TranslateIcon from "@material-ui/icons/Translate";
import HistoryIcon from "@material-ui/icons/History";
import HelpIcon from "@material-ui/icons/Help";
import InfoIcon from "@material-ui/icons/Info";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { Link } from "react-router-dom";
import Login from "../../Auth/Login/Login";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginRight: "5px",
  },
}));

const Dropdown = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li:not(#exceptMenu)");

    // Animate Links
    navLinks.classList.toggle("open");

    links.forEach((link) => {
      link.classList.toggle("fade");
    });
    // Hamburger Animation
    hamburger.classList.toggle("toggle");

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }
  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          size="small"
          style={{
            width: "130px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <AccountCircleIcon />
            <strong style={{ marginLeft: "6px" }}> Root </strong>
          </div>
          <ExpandMoreIcon id="menuIcon" />
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper id="menu-list-grow-custom">
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <Link to="/dashboard" style={{ textDecoration: "none" }}>
                      <MenuItem>
                        <PersonOutlineIcon style={{ marginRight: "5px" }} />{" "}
                        Profile
                      </MenuItem>
                    </Link>
                    <Divider style={{ marginBottom: "8px", color: "red" }} />

                    <Link to="/HelpCenter" style={{ textDecoration: "none" }}>
                      <MenuItem onClick={handleClose}>
                        <HistoryIcon style={{ marginRight: "5px" }} /> Help
                      </MenuItem>
                    </Link>

                    <MenuItem onClick={handleClose}>
                      <TranslateIcon style={{ marginRight: "5px" }} /> English
                      to Arabic
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <LockIcon style={{ marginRight: "5px" }} />
                      <Link
                        to="/changePassword"
                        style={{ textDecoration: "none" }}
                      >
                        Change Password
                      </Link>
                    </MenuItem>
                    <Divider style={{ marginBottom: "8px" }} />

                    <MenuItem onClick={handleClose}>
                      <HelpIcon style={{ marginRight: "5px" }} />
                      <Link
                        to="/helpAndFaqDetails/common"
                        style={{ textDecoration: "none" }}
                      >
                        Help & FAQ'
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <InfoIcon style={{ marginRight: "5px" }} />
                      <Link to="/aboutUs" style={{ textDecoration: "none" }}>
                        About Us
                      </Link>
                    </MenuItem>
                    <Divider style={{ marginBottom: "8px" }} />
                    <MenuItem style={{ fontWeight: "500" }}>
                      <ExitToAppIcon />
                      <strong style={{ marginLeft: "6px" }}> Logout</strong>

                      {/* <LogoutDialog
                        content={
                          <Typography variant="subtitle1">
                            Are you sure you want to logout?
                          </Typography>
                        }
                        handleLogout={handleLogout}
                        submitBtnText="Yes"
                        btnText={"Logout"}
                        fullWidth={true}
                      /> */}
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
};

export default Dropdown;
