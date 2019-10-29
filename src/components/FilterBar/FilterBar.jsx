import React from 'react';
import { StyledFilterBar } from './styles';
import PropTypes from 'prop-types';

const FilterBar = ({ sets, activeSet, handleChange }) => {

  sets && 
  sets.sort((a, b) => {
    if (a.releaseDate.slice(0,4) - b.releaseDate.slice(0,4) > 0) return 1;
    if (a.releaseDate.slice(0,4) - b.releaseDate.slice(0,4) < 0) return -1;
    return a.releaseDate.slice(5, 7) - b.releaseDate.slice(5, 7)
  }).reverse()

  

  return (
    <StyledFilterBar>
      <select value={activeSet} onChange={handleChange}>
        {sets && sets.map(set => 
          (set.type === 'core' || set.type === 'expansion') &&
          <option key={set.code} value={set.code}>{set.code}</option>
        )}
      </select>
    </StyledFilterBar>
  )
}

FilterBar.propTypes = {
  sets: PropTypes.array,
  activeSet: PropTypes.string,
  handleChange: PropTypes.func,
}

export default FilterBar;
