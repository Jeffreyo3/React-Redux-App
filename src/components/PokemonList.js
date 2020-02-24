import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import { connect } from 'react-redux';
import axios from 'axios';
import { setDetailResults } from '../actions'

const PokemonList = props => {
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
        const current = props.detailList.filter(pokemon => pokemon.url === props.pokemon.url)
        if (current.length === 0) {
            axios.get(props.pokemon.url)
                .then(res => {
                    props.setDetailResults({ ...props.pokemon, extra: res.data })
                    setDetails({ ...props.pokemon, extra: res.data })
                })
                .catch(err => console.log(`Get PKMN Card details error: ${err}`))
            // console.log(current)
        } else {
            setDetails({ ...current[0] })
        }

    }, [])

    const handleAddPokemon = () => {
        props.addPokemon(details);
    }

    return (
        <div>
            <PokemonCard pokemon={details} addPokemon={props.addPokemon} handleAddPokemon={handleAddPokemon} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        detailList: state.detailResults
    }
}

export default connect(mapStateToProps, { setDetailResults })(PokemonList);