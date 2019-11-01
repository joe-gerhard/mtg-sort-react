import React from "react";
import { StyledFilterBar, Icon, Button } from "./styles";
import PropTypes from "prop-types";

const FilterBar = ({
  sets,
  activeSet,
  handleChangeSet,
  handleSetFilter,
  handleSetTextFilter,
  filter
}) => {
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
      <div>
        <input type="text" name="text" value={filter.text} onChange={handleSetTextFilter}/>
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
      </div>
      <div>
        <Icon
          src="https://i.imgur.com/3f0zmrv.png"
          alt="White"
          name="White"
          onClick={handleSetFilter}
          selected={filter.White}
        />
        <Icon
          src="https://i.imgur.com/Cuo8vh4.png"
          alt="Blue"
          name="Blue"
          onClick={handleSetFilter}
          selected={filter.Blue}
        />
        <Icon
          src="https://i.imgur.com/1kCZTHy.png"
          alt="Black"
          name="Black"
          onClick={handleSetFilter}
          selected={filter.Black}
        />
        <Icon
          src="https://i.imgur.com/ioTehMj.png"
          alt="Red"
          name="Red"
          onClick={handleSetFilter}
          selected={filter.Red}
        />
        <Icon
          src="https://i.imgur.com/PMBUYLO.png"
          alt="Green"
          name="Green"
          onClick={handleSetFilter}
          selected={filter.Green}
        />
        <Icon
          src="https://i.imgur.com/1U3ZyBD.png"
          alt="Colorless"
          name="Colorless"
          onClick={handleSetFilter}
          selected={filter.Colorless}
        />
      </div>
      <div>
        <Button
          name="Common"
          onClick={handleSetFilter}
          selected={filter.Common}
        >
          Common
        </Button>
        <Button
          name="Uncommon"
          onClick={handleSetFilter}
          selected={filter.Uncommon}
        >
          Uncommon
        </Button>
        <Button
          name="Rare"
          onClick={handleSetFilter}
          selected={filter.Rare}
        >
          Rare
        </Button>
        <Button
          name="Mythic"
          onClick={handleSetFilter}
          selected={filter.Mythic}
        >
          Mythic
        </Button>
      </div>
    </StyledFilterBar>
  );
};

FilterBar.propTypes = {
  sets: PropTypes.array,
  activeSet: PropTypes.string,
  handleChangeSet: PropTypes.func,
  handleSetFilter: PropTypes.func,
  handleSetTextFilter: PropTypes.func,
};

export default FilterBar;
