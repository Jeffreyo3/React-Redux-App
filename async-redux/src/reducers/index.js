import { 
    PKMN_LOAD_START, 
    PKMN_LOAD_SUCCESS, 
    PKMN_LOAD_FAILURE 
} from '../actions';

const initialState = {
    isLoading: false, 
    error: "",
    data: {
        count: 0,
        previous: null,
        next: null,
        results: [
            {
            "name": "",
            "url": ""
            }
        ]
    }
}

function reducer (state = initialState, action) {
    // console.log(reducer, action);
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
            data: { ...state.data,
                previous: action.payload.previous,
                next: action.payload.next,
                results: action.payload.results
            },
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