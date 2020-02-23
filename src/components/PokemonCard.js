import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setDetailResults } from '../actions'

const PokemonCard = (props) => {
    const [details, setDetails] = useState({
        name: "",
        url: "",
        extra: {
            id: null,
            sprites: {
                front_default: ""
            }
        }
    })

    useEffect(() => {
        axios.get(props.pokemon.url)
            .then(res => {
                props.setDetailResults({ ...props.pokemon, extra: res.data })
                setDetails({ ...props.pokemon, extra: res.data })
            })
            .catch(err => console.log(`Get PKMN Card details error: ${err}`))
    }, [])

    const handleAddPokemon = () => {
        props.addPokemon(details);
    }

    return (

        <div className="pokemonCard">
            <div className="pokemonCardName">
                {props.pokemon.name}
            </div>
            {details.extra.id === null ? (
                <p>Loading...</p>
            ) : (
                    <>
                        <img alt={`A pokemon named ${details.name}`} src={details.extra.sprites.front_default} />
                        <div className="add-button" onClick={handleAddPokemon}>
                            CATCH
            </div>
                    </>
                )
            }


        </div >
    )
}


export default connect(null, { setDetailResults })(PokemonCard);