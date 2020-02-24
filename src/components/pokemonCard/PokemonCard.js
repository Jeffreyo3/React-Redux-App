import React from "react";
import CardHeader from "./CardHeader";
import "./pokemon-card.css";

const PokemonCard = props => {

    
  return (
    <div className="pokemonCard-border">
        {/* Since props might be async, Need to run a check to see if they exist first */}
        {props.pokemon.extra.id === null ? (
        <div className={`pokemonCard`}>
            <CardHeader pokemon={props.pokemon} />

            {props.pokemon.extra.id === null ? (
            <p>Loading...</p>
            ) : (
            <>
                <img
                className="sprite"
                alt={`A pokemon named ${props.pokemon.name}`}
                src={props.pokemon.extra.sprites.front_default}
                />
                <div className="add-remove-button" onClick={props.handleAddPokemon}>
                CATCH
                </div>
            </>
            )}
        </div>
        ) : (
            // If extra props exist, grab the slot 1 type and add it to pokemonCard class name.
            // This API keeps slot 1 typing at the end of the array so my index will be the array length -1
            <div className={`pokemonCard ${props.pokemon.extra.types[props.pokemon.extra.types.length -1].type.name}`}>
            <CardHeader pokemon={props.pokemon} />

            {props.pokemon.extra.id === null ? (
            <p>Loading...</p>
            ) : (
            <>
                <img
                className="sprite"
                alt={`A pokemon named ${props.pokemon.name}`}
                src={props.pokemon.extra.sprites.front_default}
                />
                <div className="add-remove-button" onClick={props.handleAddPokemon}>
                CATCH
                </div>
            </>
            )}
        </div>
        )
    }

    </div>

      
  );
};

export default PokemonCard;
