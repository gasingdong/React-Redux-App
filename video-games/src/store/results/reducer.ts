import {
  ResultsState,
  FETCH_GAMES_START,
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_FAIL,
  ResultsActionTypes,
} from './types';

const initialState: ResultsState = {
  games: [{ name: 'Metal Gear Solid' }],
  error: '',
  isFetching: false,
};

const resultsReducer = (
  state = initialState,
  action: ResultsActionTypes
): ResultsState => {
  console.log('results reducer', action);
  switch (action.type) {
    case FETCH_GAMES_START:
      return {
        ...state,
        isFetching: true,
        error: '',
      };
    case FETCH_GAMES_SUCCESS:
      return {
        ...state,
        games: action.payload,
        isFetching: false,
        error: '',
      };
    case FETCH_GAMES_FAIL:
      return {
        ...state,
        error: '',
      };
    default:
      return state;
  }
};

export default resultsReducer;
