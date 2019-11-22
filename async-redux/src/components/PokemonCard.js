import React from 'react';
import { connect } from 'react-redux';

// import { addPokemon } from '../actions';

const PokemonCard = (props) => {
    // const handleAdd = () => {
    //     props.addPokemon(props.results);
    // }

    return (
        <>
            {/* <button className="add-button">
                {/* onClick={handleAdd}> */}
                    {/* Add
            </button> */}
            {props.pokemon.name}
            {props.pokemon.url}
        </>
    )
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(null, {})(PokemonCard);