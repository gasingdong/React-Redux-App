import { ResultsState, ResultsAction } from './types';

const initialState: ResultsState = {
  games: [{ name: 'Metal Gear Solid' }],
};

const resultsReducer = (
  state = initialState,
  action: ResultsAction
): ResultsState => {
  return state;
};

export default resultsReducer;
