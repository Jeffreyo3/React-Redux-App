import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { addPokemon, getPKMNData, getNewPKMNData, setDetailResults } from '../actions';
import PokemonCard from './PokemonCard';

const PokemonListContainer = props => {
    const [number, setNumber] = useState(50);
    const [propsList, setPropsList] = useState(props.data.results)
    const { results } = props.data
    const [details, setDetails] = useState([])
    const handleChange = e => {
        e.preventDefault();
        setNumber(e.target.value);
    }


    async function updatePKMNData() {
        const detailArr = []
        await results.forEach(pokemon => {
            axios.get(pokemon.url)
                .then(res => {
                    // console.log(res)
                    const pkmn = Object.assign(pokemon
                        , { extra: res.data }
                    )
                    // const pkmn = { ...pokemon, extra: res.data }
                    detailArr.push(pkmn)
                })
                .catch(err => {
                    console.log(err);
                })

        })
        setDetails(detailArr)
    }

    useEffect(() => {
        if (results.length === 0) {
            console.log("No pokemon yet")
        } else {
            updatePKMNData();
            console.log("useEffect")
        }
    }, [results])

    useEffect(() => {
        props.setDetailResults(details)
    }, [details])

    console.log(details)

    return (
        <>

            <div className="pkmnListDiv">
                <div className="buttons">
                    {props.data.previous === null ?
                        null :
                        <button onClick={() => {
                            props.getNewPKMNData(props.data.previous)
                        }}>Previous</button>}

                    {props.data.results.length === 0 ? (
                        <>
                            <form>
                                <label htmlFor="num-display">Number of Pokemon</label>
                                <input type="number" id="num-display" name="number" min="0" max="964" value={number} onChange={handleChange} />
                            </form>
                            <button className="getButton"
                                onClick={() => {
                                    props.getNewPKMNData(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${number}`);
                                }}> S T A R T </button>
                        </>) :
                        null}

                    {props.data.next === null ?
                        null :
                        <button onClick={() => {
                            props.getNewPKMNData(props.data.next)
                        }}>Next</button>}

                </div>
                {props.error && <div>{props.error}</div>}
                {props.isLoading ? (
                    <div>Catching 'em All!</div>
                ) : (
                        <div className="pokemon-list">
                            {console.log(details)}
                            {details.map(pokemon => {
                                // console.log(pokemon)
                                return <PokemonCard key={pokemon.url} pokemon={pokemon} addPokemon={props.addPokemon} />
                            })}
                        </div>
                    )}

            </div>
        </>
    );
};

const mapStateToProps = state => {
    return {
        results: state.detailResults,
        state: state,
        data: state.data,
        isLoading: state.isLoading,
        error: state.error
    };
};

export default connect(mapStateToProps, { addPokemon, getNewPKMNData, setDetailResults })(PokemonListContainer);