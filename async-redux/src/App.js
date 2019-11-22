import React from 'react';
import './App.css';

// import { Route } from 'react-router-dom';
import PokemonList from './components/PokemonList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>	&dArr;	 Scroll to Start 	&dArr;	</h1>
      </header>
      <div>
        <h2>Pokemon</h2>
        <PokemonList />
      </div>
      
    </div>
  );
}

export default App;
