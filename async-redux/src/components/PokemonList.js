import React from 'react';
import { connect } from 'react-redux';

import { getPKMNData } from '../actions';
import PokemonCard from './PokemonCard';



const PokemonList = props => {

    return (
        <>
            <button
                onClick={() => {
                    props.getPKMNData();
                }}>
                Show me POKEMON!!
            </button>
            {props.error && <div>{props.error}</div>}
            {props.isLoading ? (
                <div>Catching 'em All!</div>
            ) : (
            <div className="pokemon-list">
                {/* <p>{props.data.results.name}</p> */}
                {props.data.results.map(pokemon => (
                    <PokemonCard key={pokemon.name} pokemon={pokemon} />
                ))}
            </div>
            )}

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

export default connect(mapStateToProps, { getPKMNData })(PokemonList);