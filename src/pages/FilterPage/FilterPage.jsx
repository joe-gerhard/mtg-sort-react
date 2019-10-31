import React, { useState, useEffect } from "react";
import axios from "axios";
import FilterBar from "../../components/FilterBar";
import CardDisplay from "../../components/CardDisplay";

const FilterPage = () => {
  const [cards, setCards] = useState(null);
  const [sets, setSets] = useState(null);
  const [activeSet, setActiveSet] = useState("ELD");
  const [filter, setFilter] = useState({
    Blue: false,
    White: false,
    Black: false,
    Red: false,
    Green: false,
    Colorless: false,
    Common: false,
    Uncommon: false,
    Rare: false,
    Mythic: false,
    text: '',
  })

  useEffect(() => {
    const url = "https://api.magicthegathering.io/v1";

    setCards(null);

    const fetchCards = async () => {
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
      setCards(combinedResults);
    };

    const fetchSets = async () => {
      const results = await axios.get(url + "/sets");
      setSets(results.data.sets);
    };

    fetchSets();
    fetchCards();
  }, [activeSet]);

  const handleChangeSet = event => {
    setActiveSet(event.target.value);
  };

  const handleSetFilter = event => {
    setFilter({...filter, [event.target.name]: !filter[event.target.name]})
  }

  const handleSetTextFilter = event => {
    setFilter({...filter, [event.target.name]: event.target.value})
  }

  return (
    <>
      <FilterBar
        sets={sets}
        activeSet={activeSet}
        handleChangeSet={handleChangeSet}
        handleSetFilter={handleSetFilter}
        handleSetTextFilter={handleSetTextFilter}
        filter={filter}
      />
      <CardDisplay cards={cards} filter={filter} />
    </>
  );
};

export default FilterPage;
