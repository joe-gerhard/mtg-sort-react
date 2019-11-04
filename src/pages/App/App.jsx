import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../utils/firebaseConfig";
import Navbar from "../../components/Navbar";
import FilterPage from "../FilterPage";
import LoginPage from "../LoginPage";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

const App = props => {
  const { user, signOut, signInWithGoogle } = props;

  return (
    <>
      <Navbar user={user} signOut={signOut} signInWithGoogle={signInWithGoogle} />
      <Switch>
        <Route exact path="/filter" component={FilterPage} />
        <Route
          exact
          path="/login"
          render={routeProps => <LoginPage {...routeProps} />}
        />
        <Route path="/">
          <Redirect to="/filter"/>
        </Route>
      </Switch>
    </>
  );
};

export default withFirebaseAuth({ providers, firebaseAppAuth })(App);
