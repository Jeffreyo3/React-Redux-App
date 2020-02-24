import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPokemon, getNewPKMNData } from '../actions';
import './pokemon-list-container.css'
import PokemonList from './PokemonList'

const PokemonListContainer = props => {
    const [number, setNumber] = useState(10);
    const [generation, setGeneration] = useState(0)
    const handleChange = e => {
        e.preventDefault();
        setNumber(e.target.value);
    }
    const handleGenChange = e => {
        e.preventDefault();
        setGeneration(e.target.value);
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
                                <fieldset htmlFor="num-display">Num of Pokemon to display at a time: </fieldset>
                                <input type="number" id="num-display" name="number" min="0" max="964" value={number} onChange={handleChange} />
                            </form>
                            <form>
                                <fieldset htmlFor="gen-display">Starting Generation: </fieldset>
                                {/* <legend>Generation</legend> */}
                                <select id="gen-display" name="gen-display" onChange={handleGenChange}>
                                    <option value={0}>Kanto</option>
                                    <option value={151}>Johto</option>
                                    <option value={251}>Hoenn</option>
                                    <option value={386}>Sinnoh</option>
                                    <option value={493}>Unova</option>
                                    <option value={649}>Kalos</option>
                                    <option value={721}>Alola</option>
                                </select>
                            </form>
                            <button className="getButton"
                                onClick={() => {
                                    props.getNewPKMNData(`https://pokeapi.co/api/v2/pokemon?offset=${generation}&limit=${number}`);
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
                        <>
                            <div className="pokemon-list">
                                {props.results.map(pokemon => {
                                    return <PokemonList key={pokemon.url} pokemon={pokemon} addPokemon={props.addPokemon} />
                                })}
                            </div>
                            <div style={{ marginTop: "2%" }} />
                        </>
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