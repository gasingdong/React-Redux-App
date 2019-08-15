import { QueryState, QueryAction } from './types';

const initialState: QueryState = {
  name: '',
};

const queryReducer = (
  state = initialState,
  action: QueryAction
): QueryState => {
  return state;
};

export default queryReducer;
