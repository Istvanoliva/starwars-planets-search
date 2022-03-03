import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const SearchPlanets = () => {
  const { setFilter } = useContext(PlanetsContext);

  return (
    <label htmlFor="filterPlanet">
      <input
        id="filterPlanet"
        type="text"
        data-testid="name-filter"
        placeholder="Search..."
        onChange={ setFilter }
      />
    </label>
  );
};

export default SearchPlanets;
