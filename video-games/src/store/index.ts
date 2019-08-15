import { combineReducers } from 'redux';
import queryReducer from './query/reducer';
import resultsReducer from './results/reducer';

const rootReducer = combineReducers({
  query: queryReducer,
  results: resultsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
