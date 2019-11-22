import axios from 'axios';

// Async action types
export const PKMN_LOAD_START = "PKMN_LOAD_START";
export const PKMN_LOAD_SUCCESS = "PKMN_LOAD_SUCCESS";
export const PKMN_LOAD_FAILURE = "PKMN_LOAD_FAILURE";

// User action types
export const ADD_PKMN = "ADD_PKMN";


// Async action
export const getPKMNData = () => dispatch => {

    dispatch({ type: PKMN_LOAD_START });

    axios
        .get('https://pokeapi.co/api/v2/pokemon')
        .then(res => {
            console.log(res);
            dispatch({
                type: PKMN_LOAD_SUCCESS,
                payload: res.data.value
            })}
        )
        .catch(err => {
            console.log(err);
            dispatch({
                type: PKMN_LOAD_FAILURE,
                payload: "error loading data"
            });
        });
};

///////////////////////////////////
////////// User actions  //////////
///////////////////////////////////
export const addPokemon = pokemon => {
    return {
        type: ADD_PKMN,
        payload: pokemon
    };
};