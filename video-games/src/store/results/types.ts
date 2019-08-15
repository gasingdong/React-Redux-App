const SET_RESULTS = 'SET_RESULTS';

export interface Game {
  name: string;
}

export interface ResultsState {
  games: Game[];
}

export interface ResultsAction {
  type: typeof SET_RESULTS;
  payload: ResultsState;
}
