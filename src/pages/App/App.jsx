import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar";
import FilterPage from "../FilterPage";
import LoginPage from "../LoginPage";
import HomePage from "../HomePage";
import firebase from "../../utils/firebase";
import ProfilePage from "../ProfilePage";

const App = () => {
  const [user, setUser] = useState(null);
  const [sets, setSets] = useState(null);
  const [activeSet, setActiveSet] = useState("ELD");
  const [cards, setCards] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  sets &&
  sets
    .sort((a, b) => {
      if (a.releaseDate.slice(0, 4) - b.releaseDate.slice(0, 4) > 0) return 1;
      if (a.releaseDate.slice(0, 4) - b.releaseDate.slice(0, 4) < 0)
        return -1;
      return a.releaseDate.slice(5, 7) - b.releaseDate.slice(5, 7);
    })
    .reverse();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(currentUser => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
  });

  useEffect(() => {
    let isMounted = true;
    const url = "https://api.magicthegathering.io/v1";
    const fetchSets = async () => {
      const results = await axios.get(url + "/sets");
      if (!isMounted) {
        return;
      }
      setSets(results.data.sets);
    };

    fetchSets();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    let cancel = false;
    const url = "https://api.magicthegathering.io/v1";

    const fetchCards = async () => {
      setIsLoading(true);

      const resultArr = await axios.all([
        axios.get(url + "/cards", {
          params: {
            set: activeSet,
            page: 1
          }
        }),
        axios.get(url + "/cards", {
          params: {
            set: activeSet,
            page: 2
          }
        }),
        axios.get(url + "/cards", {
          params: {
            set: activeSet,
            page: 3
          }
        }),
        axios.get(url + "/cards", {
          params: {
            set: activeSet,
            page: 4
          }
        })
      ]);

      let combinedResults = [];

      resultArr.forEach(result => {
        combinedResults = [...combinedResults, ...result.data.cards];
      });
      if (cancel) {
        return;
      }

      setCards(combinedResults);
      setIsLoading(false);
    };

    fetchCards();

    return () => {
      cancel = true;
    };

  }, [activeSet, setCards]);

  const handleChangeSet = event => {
    setActiveSet(event.target.value);
  };

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
        <Route
          exact
          path="/filter"
          render={routeProps => (
            <FilterPage
              {...routeProps}
              sets={sets}
              activeSet={activeSet}
              handleChangeSet={handleChangeSet}
              cards={cards}
              isLoading={isLoading}
            />
          )}
        />
        {user && (
          <Route
            exact
            path="/profile"
            render={routeProps => (
              <ProfilePage {...routeProps} user={user} sets={sets} activeSet={activeSet} handleChangeSet={handleChangeSet}/>
            )}
          />
        )}
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
