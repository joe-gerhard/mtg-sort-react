import React, { useState } from "react";
import FilterBar from "../../components/FilterBar";
import CardDisplay from "../../components/CardDisplay";
import LoadingBar from "../../components/LoadingBar";

const FilterPage = ({ sets, activeSet, handleChangeSet, isLoading, cards }) => {

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
    text: ""
  });

  const handleSetFilter = event => {
    setFilter({ ...filter, [event.target.name]: !filter[event.target.name] });
  };

  const handleSetTextFilter = event => {
    setFilter({ ...filter, [event.target.name]: event.target.value });
  };

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
      {isLoading ? (
        <LoadingBar />
      ) : (
        <CardDisplay cards={cards} filter={filter} />
      )}
    </>
  );
};

export default FilterPage;
