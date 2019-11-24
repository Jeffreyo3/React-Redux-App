import React from 'react';
import { connect } from 'react-redux';

import { removePokemon } from '../actions';

const PokemonTeamCard = (props) => {
    const handleRemovePokemon = () => {
        props.removePokemon(props.pokemon);
    }

    return (
        <div className="pokemonTeamCard">

            <h3 className="pokemonTeamCardName">
            {props.pokemon.name}
            </h3>
            <div className="remove-button" onClick={handleRemovePokemon}>
                    X
            </div>
        </div>
    )
}

// const mapStateToProps = state => {
//     return {

//     }
// }

export default connect(null, {removePokemon})(PokemonTeamCard);