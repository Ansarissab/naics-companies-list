import React, { useState, useEffect } from "react";
import Dashboard from './components/Dashboard'
import AuthenticationForApiService from "./services/AuthenticationForApiService.js";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const App = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    setIsUserLoggedIn(AuthenticationForApiService.isUserLoggedIn());
  }, [])

  return (
    <div>
      <Dashboard isUserLoggedIn={isUserLoggedIn} setIsUserLoggedIn={setIsUserLoggedIn} />
    </div>
  )
};

export default App;
