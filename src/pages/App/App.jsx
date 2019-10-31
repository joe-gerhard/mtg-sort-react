import React from "react";
import { Route } from "react-router-dom";
import Navbar from "../../components/Navbar";
import FilterPage from '../FilterPage';
import * as firebase from 'firebase/app';
import 'firebase/auth';

const App = () => {
  return (
    <>
      <Navbar />
      <Route exact path="/filter" component={FilterPage}/>
    </>
  );
};

export default App;
