import { PKMN_LOAD_START, PKMN_LOAD_SUCCESS, PKMN_LOAD_FAILURE } from '../actions';

const initialState = {
    isLoading: false, 
    error: "",
    data: {
        results: [
            {
            "name": "hello",
            "url": ""
            }
        ]
    }
}

function reducer (state = initialState, action) {
    console.log(reducer, action);
    switch (action.type) {
        case PKMN_LOAD_START:
          return {
            ...state,
            isLoading: true
          };
        case PKMN_LOAD_SUCCESS:
            console.log(action.payload)
          return {
            ...state,
            data: { ...state.data, results: action.payload },
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

export default reducer;