import React from "react";
import { Route } from "react-router-dom";
import Navbar from "../../components/Navbar";
import FilterPage from '../FilterPage';

const App = () => {
  return (
    <>
      <Navbar />
      <Route exact path="/filter" component={FilterPage}/>
    </>
  );
};

export default App;
