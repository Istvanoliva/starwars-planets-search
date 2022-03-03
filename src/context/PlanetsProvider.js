import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanetsList from '../Services/fetchPlanets';

const PlanetsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [filterPlanets, setFilterPlanets] = useState({ filterByName: { name: '' } });

  const getPlanets = async () => {
    const response = await fetchPlanetsList();
    setPlanets(response.results);
  };

  useEffect(() => {
    getPlanets();
  }, []);

  const setFilter = ({ target }) => {
    setFilterPlanets({ filterByName: { name: target.value } });
  };

  const value = {
    data: planets,
    setPlanets,
    filterPlanets,
    setFilter,
  };

  return (
    <PlanetsContext.Provider value={ value }>
      { children }
    </PlanetsContext.Provider>
  );
};

PlanetsProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default PlanetsProvider;
