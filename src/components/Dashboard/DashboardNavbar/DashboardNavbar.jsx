import { Grid } from "@material-ui/core";
import { NavLink } from "react-router-dom";

import "./DashboardNavbar.scss";

const DashboardNavbar = () => {
  return (
    <div className="dashboard__links">
      <Grid container item spacing={1} style={{ textAlign: "center" }}>
        <Grid container item md={7} lg={5} sm={12} xs={12} spacing={1}>
          <Grid item md={4} lg={4} sm={3} xs={12}>
            <NavLink activeClassName="active navlink" to="/dashboard/manage">
              <div>Manage my ads</div>
            </NavLink>
          </Grid>
          <Grid item md={4} lg={4} sm={3} xs={12}>
            <NavLink activeClassName="active navlink" to="/dashboard/message">
              <pre>Messages</pre>
            </NavLink>
          </Grid>
          <Grid item md={4} lg={4} sm={3} xs={12}>
            <NavLink activeClassName="active navlink" to="/dashboard/favourite">
              <pre>Favourites</pre>
            </NavLink>
          </Grid>
        </Grid>

        <Grid container item md={5} lg={7} sm={12} xs={12} spacing={1}>
          <Grid item md={4} lg={4} sm={3} xs={12}>
            <NavLink activeClassName="active navlink" to="/dashboard/recent">
              <pre>Recent viewed</pre>
            </NavLink>
          </Grid>
          <Grid item md={4} lg={4} sm={3} xs={12}>
            <NavLink activeClassName="active navlink" to="/dashboard/myalert">
              <pre>My Alerts</pre>
            </NavLink>
          </Grid>
          <Grid item md={4} lg={4} sm={3} xs={12}>
            <NavLink activeClassName="active navlink" to="/dashboard/profile">
              <pre>My Details</pre>
            </NavLink>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default DashboardNavbar;
