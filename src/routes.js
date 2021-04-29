import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import HelpCenter from "./components/HelpCenter/HelpCenter";
import AdsDetails from "./components/AdsDetails/AdsDetails";
import Chat from "./components/Chat";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/chat" component={Chat} />
        <Route exact path="/helpcenter" component={HelpCenter} />
        <Route exact path="/adsDetails" component={AdsDetails} />
      </Switch>
    </Router>
  );
};

export default Routes;
