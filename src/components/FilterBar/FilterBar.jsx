import React from "react";
import { StyledFilterBar, Icon } from "./styles";
import PropTypes from "prop-types";

const FilterBar = ({ sets, activeSet, handleChangeSet, handleSetFilter, filter }) => {
  sets &&
    sets
      .sort((a, b) => {
        if (a.releaseDate.slice(0, 4) - b.releaseDate.slice(0, 4) > 0) return 1;
        if (a.releaseDate.slice(0, 4) - b.releaseDate.slice(0, 4) < 0)
          return -1;
        return a.releaseDate.slice(5, 7) - b.releaseDate.slice(5, 7);
      })
      .reverse();

  return (
    <StyledFilterBar>
      <select value={activeSet} onChange={handleChangeSet}>
        {sets &&
          sets.map(
            set =>
              (set.type === "core" || set.type === "expansion") && (
                <option key={set.code} value={set.code}>
                  {set.code}
                </option>
              )
          )}
      </select>
      <Icon
        src="https://i.imgur.com/3f0zmrv.png"
        alt="White"
        onClick={handleSetFilter}
        selected={filter.White}
      />
      <Icon
        src="https://i.imgur.com/Cuo8vh4.png"
        alt="Blue"
        onClick={handleSetFilter}
        selected={filter.Blue}
      />
      <Icon
        src="https://i.imgur.com/1kCZTHy.png"
        alt="Black"
        onClick={handleSetFilter}
        selected={filter.Black}
      />
      <Icon
        src="https://i.imgur.com/ioTehMj.png"
        alt="Red"
        onClick={handleSetFilter}
        selected={filter.Red}
      />
      <Icon
        src="https://i.imgur.com/PMBUYLO.png"
        alt="Green"
        onClick={handleSetFilter}
        selected={filter.Green}
      />
      <Icon
        src="https://i.imgur.com/1U3ZyBD.png"
        alt="Colorless"
        onClick={handleSetFilter}
        selected={filter.Colorless}
      />
    </StyledFilterBar>
  );
};

FilterBar.propTypes = {
  sets: PropTypes.array,
  activeSet: PropTypes.string,
  handleChangeSet: PropTypes.func
};

export default FilterBar;
