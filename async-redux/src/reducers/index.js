import {
  PKMN_LOAD_START,
  PKMN_LOAD_SUCCESS,
  PKMN_LOAD_FAILURE,
  ADD_PKMN,
  ADD_DETAIL,
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
  detailResults: [],
  userTeam: []
}

function reducer(state = initialState, action) {
  switch (action.type) {

    case PKMN_LOAD_START:
      return {
        ...state,
        isLoading: true
      };

    case PKMN_LOAD_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          count: action.payload.count,
          previous: action.payload.previous,
          next: action.payload.next,
          results: [...action.payload.results]
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
      if (state.userTeam.length >= 6) {
        return state;
      } else {
        return {
          ...state,
          userTeam:
            [...state.userTeam, action.payload]
        }
      }

    case ADD_DETAIL:
      return {
        ...state,
        isLoading: false,
        detailResults: action.payload
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