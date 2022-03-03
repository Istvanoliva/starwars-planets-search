import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';
import SearchPlanets from './components/SearchPlanets';

function App() {
  return (
    <PlanetsProvider>
      <div>
        <h1>Star Wars</h1>
        <SearchPlanets />
        <Table />
      </div>
    </PlanetsProvider>
  );
}

export default App;
