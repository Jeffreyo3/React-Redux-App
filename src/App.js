import React from 'react';
import './App.css';

import PokemonListContainer from './components/PokemonListContainer';
import UserTeam from './components/UserTeam';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body">
        <div className="left-bar">
          <UserTeam />
        </div>
        <div className="main">
          <h2>Pokemon</h2>
          <PokemonListContainer />
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default App;
