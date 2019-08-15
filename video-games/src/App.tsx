import React from 'react';
import { connect } from 'react-redux';
import 'bulma';
import './App.css';
import Form from './components/Form';
import GameList from './components/GameList';
import { AppState } from './store';
import { QueryState } from './store/query/types';
import getGamesAction from './store/query/actions';

interface AppProps {
  getGames: () => void;
}

const App = ({
  query,
  results,
  getGames,
}: AppState & AppProps): React.ReactElement => {
  const setQuery = (queryIn: QueryState): void => {
    console.log('query', queryIn);
    getGames();
  };

  return (
    <div className="App">
      <Form setQuery={setQuery} />
      <GameList list={results.games} />
    </div>
  );
};

const mapStateToProps = (state: AppState): AppState => {
  return {
    query: state.query,
    results: state.results,
  };
};

export default connect(
  mapStateToProps,
  { getGames: getGamesAction }
)(App);
