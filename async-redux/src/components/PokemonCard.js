import React from 'react';

const PokemonCard = (props) => {
    const handleAddPokemon = () => {
        props.addPokemon(props.pokemon);
    }

    return (
        <div className="pokemonCard">

            <div className="pokemonCardName">
                {props.pokemon.name}
            </div>
            <div className="add-button" onClick={handleAddPokemon}>
                CATCH
            </div>
        </div>
    )
}

export default PokemonCard;