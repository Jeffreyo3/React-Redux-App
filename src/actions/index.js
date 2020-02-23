import axios from 'axios';
// import { useState } from 'react';

// Async action types
export const PKMN_LOAD_START = "PKMN_LOAD_START";
export const PKMN_LOAD_SUCCESS = "PKMN_LOAD_SUCCESS";
export const PKMN_LOAD_FAILURE = "PKMN_LOAD_FAILURE";

// User action types
export const ADD_PKMN = "ADD_PKMN";
export const REMOVE_PKMN = "REMOVE_PKMN";
export const ADD_DETAIL = "ADD_DETAIL";

// setup ID for pokemon on team
var teamCouter = 0;
function teamId() {
    return teamCouter++;
}

///////////////////////////////////
////////// Async actions  /////////
///////////////////////////////////
export const getNewPKMNData = api => dispatch => {
    dispatch({ type: PKMN_LOAD_START });

    axios
        .get(api)
        .then(res => {
            dispatch({
                type: PKMN_LOAD_SUCCESS,
                payload: {
                    ...res.data, results: res.data.results
                    // .map(pokemon => Object.assign(pokemon
                    //     , { id: uniqueId() }
                    // ))
                }
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

export const setDetailResults = pokemon => dispatch => {
    dispatch({
        type: ADD_DETAIL,
        payload: pokemon
    });
};

export const removePokemon = pokemon => {
    return {
        type: REMOVE_PKMN,
        payload: pokemon
    };
};