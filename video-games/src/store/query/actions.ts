import fetchJsonp from 'fetch-jsonp';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import {
  FETCH_GAMES_START,
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_FAIL,
} from '../results/types';
import { AppState } from '..';

interface ResponseType {
  results: {};
}

const getGamesAction = (): ThunkAction<void, AppState, null, Action> => async (
  dispatch
): Promise<void> => {
  dispatch({
    type: FETCH_GAMES_START,
  });
  console.log('calling api!');

  try {
    const response = await fetchJsonp(
      'https://www.giantbomb.com/api/games/?api_key=82f633d18a8558ffe336c55b0bc657e400578abc&format=jsonp&json_callback=search_results',
      {
        jsonpCallbackFunction: 'search_results',
      }
    );
    const json = await response.json();

    if (json) {
      console.log('response', json.results);
      dispatch({
        type: FETCH_GAMES_SUCCESS,
        payload: {
          games: [...json.results],
        },
      });
    }
  } catch (err) {
    dispatch({ type: FETCH_GAMES_FAIL, payload: err });
  }
};

export default getGamesAction;
