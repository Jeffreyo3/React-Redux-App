import React from 'react';
import './App.css';

// import { Route } from 'react-router-dom';
import PokemonListContainer from './components/PokemonListContainer';
import UserTeam from './components/UserTeam';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>	&dArr;	 Press Start 	&dArr;	</h1>
      </header>
      <div className="body">
        <div className="left-bar">
          <UserTeam />
        </div>
        <div className="main">
          <h2>Pokemon</h2>
          <PokemonListContainer />
        </div>

      </div>

    </div>
  );
}

export default App;
