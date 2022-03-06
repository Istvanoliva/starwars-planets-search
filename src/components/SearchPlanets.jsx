import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const SearchPlanets = () => {
  const { setFilter, setColumn, setComparison, setNumber,
    filterByNumericValues: { column, number, comparison },
    updateFilter, data } = useContext(PlanetsContext);

  return (
    <form>
      <label htmlFor="filterPlanet">
        <input
          id="filterPlanet"
          type="text"
          data-testid="name-filter"
          placeholder="Search..."
          onChange={ setFilter }
        />
      </label>
      <label htmlFor="column">
        <select
          name="column"
          id="column"
          data-testid="column-filter"
          value={ column }
          onChange={ ({ target: { value } }) => setColumn(value) }
        >
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison">
        <select
          name="comparison"
          id="comparison"
          data-testid="comparison-filter"
          value={ comparison }
          onChange={ ({ target: { value } }) => setComparison(value) }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>
      <label htmlFor="value">
        <input
          id="value"
          name="number"
          type="number"
          data-testid="value-filter"
          placeholder="Search..."
          value={ number }
          onChange={ ({ target: { value } }) => setNumber(value) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => updateFilter(data) }
      >
        Filter
      </button>
    </form>
  );
};

export default SearchPlanets;
