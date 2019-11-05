import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../../components/Navbar";
import FilterPage from "../FilterPage";
import LoginPage from "../LoginPage";
import HomePage from "../HomePage";

const App = props => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/filter" component={FilterPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </>
  );
};

export default App;
