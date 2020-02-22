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

// setup unique ID for rendering pokemon
var pokemonCounter = 1;
function uniqueId() {
    return pokemonCounter++;
}
// setup ID for pokemon on team
var teamCouter = 0;
function teamId() {
    return teamCouter++;
}


// Async action

export const getNewPKMNData = api => dispatch => {
    dispatch({ type: PKMN_LOAD_START });

    axios
        .get(api)
        .then(res => {
            dispatch({
                type: PKMN_LOAD_SUCCESS,
                payload: {
                    ...res.data, results: res.data.results.map(pokemon => Object.assign(pokemon
                        , { id: uniqueId() }
                    ))
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
}

// const [data, setData] = useState({})
// export const getNewPKMNData = api => dispatch => {
//     dispatch({ type: PKMN_LOAD_START });

//     axios
//         .get(api)
//         .then(res => {
//             setData({
//                 ...res.data, results: res.data.results.map(pokemon => Object.assign(pokemon
//                     , { id: uniqueId() }
//                 ))
//             })
//         })
//         .then(() => {
//             for (let i = 0; i < data.results.length; i++) {
//                 const array = data.results.filter(item => item.url !== data.results[i].url)
//                 axios.get(data.results[i].url)
//                     .then(res => {
//                         setData({
//                             ...data,
//                             results: [...array, Object.assign(data.results[i], { extra: res.data })]
//                         })
//                     })
//                     .catch(err => console.log(`Extra Pokemon data error: ${err}`))
//             }
//         })
//         .then(() => dispatch({ type: PKMN_LOAD_SUCCESS, payload: data }))
//         .catch(err => {
//             console.log(err);
//             dispatch({
//                 type: PKMN_LOAD_FAILURE,
//                 payload: `Error loading data: ${err}`
//             });
//         });
// }

// const detail = []
// export const updatePKMNData = (data) => dispatch => {
//     dispatch({ type: PKMN_LOAD_START });
//     // Loop through state.data.results
//     if (data.length === 0) {
//         console.log("No pokemon caught yet")
//     } else {
//         data.forEach(pokemon => {
//             axios.get(pokemon.url)
//                 .then(res => {

//                     const pkmn = Object.assign(pokemon
//                         , { extra: res.data }
//                     )
//                     // { ...pokemon, extra: res.data }
//                     detail.push(pkmn)
//                 })
//                 .catch(err => {
//                     console.log(err);
//                     dispatch({
//                         type: PKMN_LOAD_FAILURE,
//                         payload: `Error loading data: ${err}`
//                     });
//                 })
//         })
//     }

//     dispatch({ type: ADD_DETAIL, payload: detail, isLoading: false })
//     detail.splice(0, detail.length);
// }

export const setDetailResults = array => dispatch => {
    dispatch({ type: PKMN_LOAD_START });

    const newArr = [...array]
    return {
        type: ADD_DETAIL,
        payload: newArr
    }
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