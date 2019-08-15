export const FETCH_GAMES_START = 'FETCH_GAMES_START';
export const FETCH_GAMES_SUCCESS = 'FETCH_GAMES_SUCCESS';
export const FETCH_GAMES_FAIL = 'FETCH_GAMES_FAIL';

export interface Game {
  name: string;
}

export interface ResultsState {
  games: Game[];
  error: string;
  isFetching: boolean;
}

export interface GetResultsAction {
  type: typeof FETCH_GAMES_START;
  payload: ResultsState;
}

export interface SetResultsAction {
  type: typeof FETCH_GAMES_SUCCESS;
  payload: ResultsState;
}

export interface ErrorResultsAction {
  type: typeof FETCH_GAMES_FAIL;
  payload: ResultsState;
}

export type ResultsActionTypes =
  | SetResultsAction
  | GetResultsAction
  | ErrorResultsAction;
