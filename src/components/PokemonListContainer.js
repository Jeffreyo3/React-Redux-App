import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPokemon, getNewPKMNData } from '../actions';
import './pokemon-list-container.css'
import PokemonList from './PokemonList'

const PokemonListContainer = props => {
    const [number, setNumber] = useState(50);
    const handleChange = e => {
        e.preventDefault();
        setNumber(e.target.value);
    }

    return (
        <>

            <div className="pkmnListContainer">
                <div className="buttons">
                    {props.data.previous === null ?
                        null :
                        <button onClick={() => {
                            props.getNewPKMNData(props.data.previous)
                        }}>Previous</button>}

                    {props.data.results.length === 0 ? (
                        <>
                            <form>
                                <label htmlFor="num-display">Number of Pokemon</label>
                                <input type="number" id="num-display" name="number" min="0" max="964" value={number} onChange={handleChange} />
                            </form>
                            <button className="getButton"
                                onClick={() => {
                                    props.getNewPKMNData(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${number}`);
                                }}> S T A R T </button>
                        </>) :
                        <button className="getButton"
                            onClick={() => {
                                props.getNewPKMNData(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${number}`);
                            }}> S T A R T </button>
                    }

                    {props.data.next === null ?
                        null :
                        <button onClick={() => {
                            props.getNewPKMNData(props.data.next)
                        }}>Next</button>}

                </div>
                {props.error && <div>{props.error}</div>}
                {props.isLoading ? (
                    <div>Catching 'em All!</div>
                ) : (
                        <div className="pokemon-list">
                            {props.results.map(pokemon => {
                                return <PokemonList key={pokemon.url} pokemon={pokemon} addPokemon={props.addPokemon} />
                            })}
                        </div>
                    )}

            </div>
        </>
    );
};

const mapStateToProps = state => {
    return {
        results: state.data.results,
        state: state,
        data: state.data,
        isLoading: state.isLoading,
        error: state.error
    };
};

export default connect(mapStateToProps, { addPokemon, getNewPKMNData })(PokemonListContainer);