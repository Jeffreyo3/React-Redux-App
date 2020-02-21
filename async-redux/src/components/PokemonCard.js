import React from 'react';
// import { connect } from 'react-redux';

// import { addPokemon } from '../actions';

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
                ADD
            </div>
        </div>
    )
}

export default PokemonCard;

// const mapStateToProps = state => {
//     return {

//     }
// }

// export default connect(null, {addPokemon})(PokemonCard);