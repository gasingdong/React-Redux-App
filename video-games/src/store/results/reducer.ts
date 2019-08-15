import { ResultsState, ResultsAction } from './types';

const initialState: ResultsState = {
  games: [],
};

const resultsReducer = (
  state = initialState,
  action: ResultsAction
): ResultsState => {
  return state;
};

export default resultsReducer;
