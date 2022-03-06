import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanetsList from '../Services/fetchPlanets';

const PlanetsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [filterPlanets, setFilterPlanets] = useState({ filterByName: { name: '' } });
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [number, setNumber] = useState(0);

  // Requisito 01 - Fetch Planets
  const getPlanets = async () => {
    const response = await fetchPlanetsList();
    setPlanets(response.results);
  };

  useEffect(() => {
    getPlanets();
  }, []);

  // Requisito 02 - Filter Name
  const setFilter = ({ target }) => {
    setFilterPlanets({ filterByName: { name: target.value } });
  };

  // Requisito 03 e 04 - Filter Numeric
  const updateFilter = (array) => {
    const result = array.filter((planet) => {
      if (comparison === 'maior que') {
        return Number(planet[column]) > Number(number);
      }
      if (comparison === 'menor que') {
        return Number(planet[column]) < Number(number);
      }
      return Number(planet[column]) === Number(number);
    });
    setPlanets(result);
  };

  const STATE = {
    data: planets,
    setPlanets,
    filterPlanets,
    setFilter,
    updateFilter,
    setColumn,
    setComparison,
    setNumber,
    filterByNumericValues: { column, comparison, number },
  };

  return (
    <PlanetsContext.Provider value={ STATE }>
      { children }
    </PlanetsContext.Provider>
  );
};

PlanetsProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default PlanetsProvider;
