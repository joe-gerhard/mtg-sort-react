import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar";
import FilterPage from "../FilterPage";
import LoginPage from "../LoginPage";
import HomePage from "../HomePage";
import firebase from "../../utils/firebase";
import ProfilePage from "../ProfilePage";
import PickOrderPage from "../PickOrderPage";

const App = () => {
  const [user, setUser] = useState(null);
  const [sets, setSets] = useState(null);
  const [activeSet, setActiveSet] = useState("ELD");
  const [cards, setCards] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const url = "https://api.magicthegathering.io/v1";

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

    const fetchSets = async () => {
      const results = await axios.get(url + "/sets");
      if (!isMounted) {
        return;
      }
      let fetchedSets = results.data.sets;
      fetchedSets = fetchedSets.filter(
        set => set.type === "core" || set.type === "expansion"
      );

      fetchedSets
        .sort((a, b) => {
          if (a.releaseDate.slice(0, 4) - b.releaseDate.slice(0, 4) > 0)
            return 1;
          if (a.releaseDate.slice(0, 4) - b.releaseDate.slice(0, 4) < 0)
            return -1;
          return a.releaseDate.slice(5, 7) - b.releaseDate.slice(5, 7);
        })
        .reverse();
      setSets(fetchedSets);
    };

    fetchSets();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    let cancel = false;

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
      combinedResults = combinedResults.filter(card => {
        return (
          card.imageUrl &&
          !card.type.includes("Adventure") &&
          !card.type.includes("Basic Land")
        );
      });
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
              <ProfilePage
                {...routeProps}
                user={user}
                sets={sets}
                activeSet={activeSet}
                cards={cards}
                handleChangeSet={handleChangeSet}
                isLoading={isLoading}
              />
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
        <Route
          exact
          path="/pickorder/:id"
          render={routeProps => <PickOrderPage {...routeProps }/>}
        />
        <Route path="/" component={HomePage} />
      </Switch>
    </>
  );
};

export default App;
