import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    zIndex: "999999999",
  },
  drawer: {
    [theme.breakpoints.up("xs")]: {
      width: drawerWidth,
      flexShrink: 0,
      display: "none",
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `${drawerWidth}px)`,
      //   marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      // display: "none"
      display: "block",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    marginTop: "72px",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function DashboardDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <List>{props.children}</List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <AppBar position="fixed" className={classes.appBar}> */}
      {/* <LightTooltip btnTitle="Dashboard" placement="start"> */}
      <Toolbar
        position="fixed"
        className={classes.appBar}
        style={{ padding: "0" }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      {/* </LightTooltip> */}

      {/* </AppBar> */}

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {/* <AppBar position="fixed" className={classes.appBar}>  */}
            <Toolbar
              style={{
                display: "flex",
                padding: "0",
                justifyContent: "flex-end",
              }}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
            {/* </AppBar> */}

            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

export default DashboardDrawer;

{
  /* <Hidden smUp>
  <DashboardDrawer>
    {localStorage.getItem("role") === "freelancer" && (
      <div
        style={{
          backgroundColor: "white",
          marginBottom: "7px",
        }}
      >
        <FreelancerPlan />
      </div>
    )}
    <Divider />
    <div className="openDrawer">
      {localStorage.getItem("role") === "client"
        ? clientRoute
        : freelancerRoute}
    </div>
  </DashboardDrawer>
</Hidden>; */
}
