import { PKMN_LOAD_START, PKMN_LOAD_SUCCESS, PKMN_LOAD_FAILURE } from '../actions';

const initialState = {
    isLoading: false, 
    error: "",
    data: {
        results: [
            {
            "name": "bulbasaur",
            "url": "https://pokeapi.co/api/v2/pokemon/1/"
            }
        ]
    }
}

export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case PKMN_LOAD_START:
          return {
            ...state,
            isLoading: true
          };
        case PKMN_LOAD_SUCCESS:
          return {
            ...state,
            data: { ...state.data, name: action.payload },
            isLoading: false
          };
        case PKMN_LOAD_FAILURE:
          return {
            ...state,
            error: action.payload,
            isLoading: false
          };
        default:
          return state;
}};