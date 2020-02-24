import React from 'react';
import CardHeader from './CardHeader'
import './pokemon-card.css'

const PokemonCard = (props) => {

    return (
        <div className="pokemonCard-border">
            <div className="pokemonCard">
                <CardHeader pokemon={props.pokemon} />

                {props.pokemon.extra.id === null ? (
                    <p>Loading...</p>
                ) : (
                        <>
                            <img className="sprite" alt={`A pokemon named ${props.pokemon.name}`} src={props.pokemon.extra.sprites.front_default} />
                            <div className="add-remove-button" onClick={props.handleAddPokemon}>
                                CATCH
                        </div>
                        </>
                    )
                }
            </div >
        </div>
    )
}


export default PokemonCard;