import axios from 'axios';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import {
  FETCH_GAMES_START,
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_FAIL,
} from '../results/types';
import { AppState } from '..';

const getGames = (): ThunkAction<void, AppState, null, Action> => async (
  dispatch
): Promise<void> => {
  dispatch({
    type: FETCH_GAMES_START,
  });
  console.log('calling api!');

  try {
    const response = await axios.get(
      'https://www.giantbomb.com/api/games/?api_key=82f633d18a8558ffe336c55b0bc657e400578abc'
    );

    if (response) {
      dispatch({ type: FETCH_GAMES_SUCCESS, payload: response.data.results });
    }
  } catch (err) {
    dispatch({ type: FETCH_GAMES_FAIL, payload: err });
  }
};

export default getGames;
