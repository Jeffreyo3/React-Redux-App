import React from 'react';
import iconlist from '../../images/type-icons/iconlist';
import './card-header.css';

const CardHeader = props => {


    return (
        <div className="card-header">
            <h3 className="pokemonCardName">
                {props.pokemon.name}
            </h3>

            <div className="card-type-container">
                {props.pokemon.extra.types ? props.pokemon.extra.types.map(type => {
                    for (let i = 0; i < iconlist.length; i++) {
                        if (type.type.name.toLowerCase() === iconlist[i].name.toLowerCase()) {
                            return <img className="type-icon" src={iconlist[i].img} title={`Image of ${iconlist[i].name} icon by Joshua Eckstein from Pixabay`} alt={`${iconlist[i].img} type indicator.`} />
                        }
                    }
                }) : null}
            </div>
        </div>
    )
};

export default CardHeader;