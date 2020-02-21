import {
  PKMN_LOAD_START,
  PKMN_LOAD_SUCCESS,
  PKMN_LOAD_FAILURE,
  ADD_PKMN,
  REMOVE_PKMN
} from '../actions';

const initialState = {
  isLoading: false,
  error: "",
  data: {
    count: 0,
    previous: null,
    next: null,
    results: []
  },
  userTeam: []
}

function reducer(state = initialState, action) {
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
        data: {
          ...state.data,
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


    case ADD_PKMN:
      console.log(state.userTeam);
      if (state.userTeam.length >= 5) {
        return state;
      } else {
        return {
          ...state,
          userTeam:
            [...state.userTeam, action.payload]
        }
      }


    case REMOVE_PKMN:
      return {
        ...state,
        userTeam: state.userTeam.filter(pokemon => pokemon.team_id !== action.payload.team_id)
      }
    default:
      return state;
  }
};

export default reducer;