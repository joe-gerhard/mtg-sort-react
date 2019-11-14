import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../../components/Navbar";
import FilterPage from "../FilterPage";
import LoginPage from "../LoginPage";
import HomePage from "../HomePage";
import firebase from "../../utils/firebase";
import ProfilePage from "../ProfilePage";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(currentUser => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
  });

  const provider = {
    google: new firebase.auth.GoogleAuthProvider(),
    facebook: new firebase.auth.FacebookAuthProvider(),
    twitter: new firebase.auth.TwitterAuthProvider()
  };

  const handleSignIn = service => {
    firebase
      .auth()
      .signInWithPopup(provider[service])
      .then(result => {
        setUser(result.user);
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  const handleLogout = () => {
    firebase.auth().signOut();
  };

  return (
    <>
      <Navbar user={user} handleLogout={handleLogout} />
      <Switch>
        <Route exact path="/filter" component={FilterPage} />
        {user && <Route exact path="/profile" component={ProfilePage} />}
        <Route
          exact
          path="/login"
          render={routeProps => (
            <LoginPage
              {...routeProps}
              user={user}
              handleSignIn={handleSignIn}
            />
          )}
        />
        <Route path="/" component={HomePage} />
      </Switch>
    </>
  );
};

export default App;
