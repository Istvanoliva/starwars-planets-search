import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanetsList from '../Services/fetchPlanets';

const PlanetsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);

  const getPlanets = async () => {
    const response = await fetchPlanetsList();
    setPlanets(response.results);
  };

  useEffect(() => {
    getPlanets();
  }, []);

  const value = { data: planets, setPlanets };

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
