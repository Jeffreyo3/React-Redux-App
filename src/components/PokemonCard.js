import React from 'react';
// import axios from 'axios';
// import { connect } from 'react-redux';
// import { setDetailResults } from '../actions'

const PokemonCard = (props) => {

    return (
        <div className="pokemonCard">
            <h3 className="pokemonCardName">
                {props.pokemon.name}
            </h3>
            {props.pokemon.extra.id === null ? (
                <p>Loading...</p>
            ) : (
                    <>
                        <img alt={`A pokemon named ${props.pokemon.name}`} src={props.pokemon.extra.sprites.front_default} />
                        <div className="add-remove-button" onClick={props.handleAddPokemon}>
                            CATCH
                        </div>
                    </>
                )
            }
        </div >
    )
}


export default PokemonCard;