import React from 'react';
import { connect } from 'react-redux';

import { getPKMNData } from '../actions';
import PokemonCard from './PokemonCard';


const PokemonList = props => {

    var myuniqueidcounter = 0;
    function uniqueId() {
        return myuniqueidcounter++;
    }

    return (
        <> 
        <div className="pkmnListDiv">
            <div className="buttons">
                {/* <button>Previous</button> */}

                <button className="getButton"
                    onClick={() => {
                        props.getPKMNData();
                        // console.log("POKEMON LIST" + props.state);
                    }}>
                    S T A R T
                </button>

                {/* <button>Next</button> */}
            </div>
            {props.error && <div>{props.error}</div>}
            {props.isLoading ? (
                <div>Catching 'em All!</div>
            ) : (
            <div className="pokemon-list">
                {props.data.results.map(pokemon => {
                    Object.assign(pokemon, {id: uniqueId()})
                    return <PokemonCard key={pokemon.Id} pokemon={pokemon} />
                })}
            </div>
            )}

        </div>
        </>
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