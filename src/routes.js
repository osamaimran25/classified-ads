import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import HelpCenter from "./components/HelpCenter/HelpCenter";
import AdsDetails from "./components/AdsDetails/AdsDetails";
import Chat from "./components/Chat";
import CreateAds from "./components/CreactAds/CreateAds";
import Dashboard from "./components/Dashboard/Dashboard";
import AdsCreate from "./components/AdsCreate/AdsCreate";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/chat" component={Chat} />
        <Route exact path="/helpcenter" component={HelpCenter} />
        <Route exact path="/adsDetails" component={AdsDetails} />
        <Route exact path="/createAds" component={CreateAds} />
        <Route exact path="/adsCreate" component={AdsCreate} />
        <Route exact path="/dashboard/profile" component={Dashboard} />
        <Route exact path="/dashboard" component={Dashboard} />

        {/* <Route exact path="/profile" component={Profile} />
        <Route exact path="/myalert" component={MyAlert} />
        <Route exact path="/manageads" component={ManageMyAds} />
        <Route exact path="/messages" component={Messages} />
        <Route exact path="/favourites" component={Favourites} />
        <Route exact path="/recent" component={Recent} /> */}

        <Route exact path="/" component={Home} />

        <Route path="*">
          <div>
            <h1>page not found</h1>
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
