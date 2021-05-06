import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Favourites from "./Favourites/Favourites";
import ManageMyAds from "./ManageMyAds/ManageMyAds";
import Messages from "./Messages/Messages";
import MyAlert from "./MyAlert/MyAlert";
import Profile from "./Profile/Profile";
import Recent from "./Recent/Recent";

const DashboardComponents = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/dashboard/manage" component={ManageMyAds} />
        <Route exact path="/dashboard/message" component={Messages} />
        <Route exact path="/dashboard/favourite" component={Favourites} />
        <Route exact path="/dashboard/recent" component={Recent} />
        <Route exact path="/dashboard/myalert" component={MyAlert} />
        <Route exact path="/dashboard/profile" component={Profile} />
      </Switch>
    </Router>
  );
};

export default DashboardComponents;
