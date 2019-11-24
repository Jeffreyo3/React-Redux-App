import axios from 'axios';

// Async action types
export const PKMN_LOAD_START = "PKMN_LOAD_START";
export const PKMN_LOAD_SUCCESS = "PKMN_LOAD_SUCCESS";
export const PKMN_LOAD_FAILURE = "PKMN_LOAD_FAILURE";

// export const NEXT_POKEMON = "NEXT_POKEMON";
// export const PREV_POKEMON = "PREV_POKEMON";

// User action types
export const ADD_PKMN = "ADD_PKMN";
export const REMOVE_PKMN = "REMOVE_PKMN";

// Async action
export const getPKMNData = () => dispatch => {

    dispatch({ type: PKMN_LOAD_START });

    axios
        .get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=151`)
        .then(res => {
            // console.log(res.data);
                dispatch({
                type: PKMN_LOAD_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: PKMN_LOAD_FAILURE,
                payload: err + "error loading data"
            });
        });
};

// export const getNextPKMNData = () => dispatch => {
//     dispatch({ type: PKMN_LOAD_START });
//     axios  
//         .get(`${state.data.next}`)
//         .then(res => {
//             dispatch({
//                 type: PKMN_LOAD_SUCCESS,
//                 payload: res.data
//             })
//         })
//         .catch(err => {
//             console.log(err);
//             dispatch({
//                 type: PKMN_LOAD_FAILURE,
//                 payload: err + "error loading data"
//             });
//         });
// }

///////////////////////////////////
////////// User actions  //////////
///////////////////////////////////
export const addPokemon = pokemon => {
    return {
        type: ADD_PKMN,
        payload: pokemon
    };
};

export const removePokemon = pokemon => {
    return {
        type: REMOVE_PKMN,
        payload: pokemon
    }
}