import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import AuthenticatedRoute from "./AuthenticatedRoute.jsx";
import LoginComponent from "./Login.jsx";
import ErrorComponent from "./Error.jsx";
import HeaderComponent from "./Header.jsx";
import SignUp from "./SignUp.jsx";
import Company from "./Company.jsx";
import history from "../history.js";

const Dashboard = ({isUserLoggedIn, setIsUserLoggedIn}) => {

  return (
    <div className="AgCloudApp">
      <Router history={history}>
        <>
          <HeaderComponent isUserLoggedIn={isUserLoggedIn} setIsUserLoggedIn={setIsUserLoggedIn} />
          <Switch>
            <AuthenticatedRoute exact path="/" component={Company} />
            <Route path="/login" component={() => <LoginComponent setIsUserLoggedIn={setIsUserLoggedIn} />} />
            <Route path="/signup" component={SignUp} />
            <Route component={ErrorComponent} />
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default Dashboard;
