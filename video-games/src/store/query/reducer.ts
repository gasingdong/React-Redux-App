import SEND_QUERY, { QueryState, QueryAction } from './types';

const initialState: QueryState = {
  name: '',
};

const queryReducer = (
  state = initialState,
  action: QueryAction
): QueryState => {
  switch (action.type) {
    case SEND_QUERY:
      return {
        ...state,
        name: action.payload.name,
      };
    default:
      return state;
  }
};

export default queryReducer;
