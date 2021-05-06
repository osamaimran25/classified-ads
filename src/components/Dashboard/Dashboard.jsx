import Layout from "../Layout";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import DashboardNavbar from "./DashboardNavbar/DashboardNavbar";
import "./Dashboard.scss";
import DashboardComponents from "./DashboardComponents/DashboardComponents";
// import { BrowserRouter as Router } from "react-router-dom";

import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import ManageMyAds from "./DashboardComponents/ManageMyAds/ManageMyAds";
import Messages from "./DashboardComponents/Messages/Messages";
import Favourites from "./DashboardComponents/Favourites/Favourites";
import Recent from "./DashboardComponents/Recent/Recent";
import MyAlert from "./DashboardComponents/MyAlert/MyAlert";
import Profile from "./DashboardComponents/Profile/Profile";

const Dashboard = () => {
  const routes = (
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

  return (
    <Layout hindMenu>
      <div className="dashboard_wrapper">
        <Router>
          <Container>
            {/* <DashboardNavbar /> */}
            {routes}

            <Grid item md={12} sm={12} xs={12}>
              {/* <DashboardComponents /> */}
              <Switch>
                <Route exact path="/dashboard/manage" component={ManageMyAds} />
                <Route exact path="/dashboard/message" component={Messages} />
                <Route
                  exact
                  path="/dashboard/favourite"
                  component={Favourites}
                />
                <Route exact path="/dashboard/recent" component={Recent} />
                <Route exact path="/dashboard/myalert" component={MyAlert} />
                <Route exact path="/dashboard/profile" component={Profile} />
                <Route exact path="/dashboard" component={Profile} />
              </Switch>
            </Grid>
          </Container>
        </Router>
      </div>
    </Layout>
  );
};

export default Dashboard;
