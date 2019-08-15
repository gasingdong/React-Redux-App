const SEND_QUERY = 'SEND_QUERY';

export interface QueryState {
  name: string;
}

export interface QueryAction {
  type: typeof SEND_QUERY;
  payload: QueryState;
}

export default SEND_QUERY;
