import React from 'react';
import { connect } from 'react-redux';

import { getPKMNData } from '../actions';
import PokemonCard from './PokemonCard';



const PokemonList = props => {
    return (
        <div className="pkmnlist">
            <button
                onClick={() => {
                    props.getPKMNData();
                    console.log("POKEMON LIST" + props.state);
                }}>
                Show me POKEMON!!
            </button>
            {props.error && <div>{props.error}</div>}
            {props.isLoading ? (
                <div>Catching 'em All!</div>
            ) : (
            <ul className="pokemon-list">
                {console.log(props.data.results)}
                {props.data.results.map(pokemon => {
                    return <PokemonCard key={pokemon.name} pokemon={pokemon} />
                })}
            </ul>
            )}

        </div>
    );
};

const mapStateToProps = state => {
    return {
        state: state,
        data: state.data,
        isLoading: state.isLoading,
        error: state.error
    };
};

export default connect(mapStateToProps, { getPKMNData })(PokemonList);