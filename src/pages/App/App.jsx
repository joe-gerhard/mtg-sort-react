import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../../components/Navbar";
import FilterPage from '../FilterPage';
import HomePage from '../HomePage';
import LoginPage from '../LoginPage';



const App = () => {
  const [user, setUser] = useState(null);

  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/filter" component={FilterPage}/>
        <Route exact path="/login" render={routeProps => <LoginPage {...routeProps} user={user} setUser={setUser}/>}/>
        <Route exact path="/" component={HomePage}/>
      </Switch>
    </>
  );
};

export default App;
