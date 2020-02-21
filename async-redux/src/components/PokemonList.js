import React from 'react';
import { connect } from 'react-redux';

import { addPokemon, getPKMNData, getNewPKMNData } from '../actions';
import PokemonCard from './PokemonCard';

const PokemonList = props => {
    return (
        <>
            <div className="pkmnListDiv">
                <div className="buttons">
                    {props.data.previous === null ?
                        null :
                        <button onClick={() => {
                            props.getNewPKMNData(props.data.previous)
                        }}>Previous</button>}

                    {props.data.results.length === 0 ?
                        <button className="getButton"
                            onClick={() => {
                                props.getPKMNData();
                            }}> S T A R T </button> :
                        null}

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
                            {props.data.results.map(pokemon => {
                                return <PokemonCard key={pokemon.url} pokemon={pokemon} addPokemon={props.addPokemon} />
                            })}
                        </div>
                    )}

            </div>
        </>
    );
};

const mapStateToProps = state => {
    return {
        data: state.data,
        isLoading: state.isLoading,
        error: state.error
    };
};

export default connect(mapStateToProps, { addPokemon, getPKMNData, getNewPKMNData })(PokemonList);