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


var pokemonCounter = 1;
var teamCouter = 0
function uniqueId() {
    return pokemonCounter++;
}
function teamId() {
    return teamCouter++;
}



// Async action
export const getPKMNData = () => dispatch => {

    dispatch({ type: PKMN_LOAD_START });

    axios
        .get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=151`)
        .then(res => {
            console.log(res.data);
            dispatch({
                type: PKMN_LOAD_SUCCESS,
                payload: { ...res.data, results: res.data.results.map(pokemon => Object.assign(pokemon, { id: uniqueId(pokemonCounter) })) }
            })
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: PKMN_LOAD_FAILURE,
                payload: `Error loading data: ${err}`
            });
        });
};

export const getNewPKMNData = api => dispatch => {
    dispatch({ type: PKMN_LOAD_START });

    axios
        .get(api)
        .then(res => {
            console.log(res.data);
            dispatch({
                type: PKMN_LOAD_SUCCESS,
                payload: { ...res.data, results: res.data.results.map(pokemon => Object.assign(pokemon, { id: uniqueId(pokemonCounter) })) }
            })
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: PKMN_LOAD_FAILURE,
                payload: `Error loading data: ${err}`
            });
        });
}

///////////////////////////////////
////////// User actions  //////////
///////////////////////////////////
export const addPokemon = pokemon => {
    const pkmnWithId = { ...pokemon, team_id: teamId(teamCouter) }
    return {
        type: ADD_PKMN,
        payload: pkmnWithId
    };
};

export const removePokemon = pokemon => {
    return {
        type: REMOVE_PKMN,
        payload: pokemon

    }
}