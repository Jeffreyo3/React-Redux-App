import React from 'react';
import { connect } from 'react-redux';
import { removePokemon } from '../actions';

const PokemonTeamCard = (props) => {
    const handleRemovePokemon = () => {
        props.removePokemon(props.pokemon);
    }

    return (
        <div className="pokemonTeamCard">

            <div className="remove-button" onClick={handleRemovePokemon}>
                RELEASE
            </div>
            <h3 className="pokemonTeamCardName">
                {props.pokemon.name}
            </h3>

        </div>
    )
}

export default connect(null, { removePokemon })(PokemonTeamCard);