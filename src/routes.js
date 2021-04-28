import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Demo from "./Components/Demo";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Demo} />
      </Switch>
    </Router>
  );
};

export default Routes;
