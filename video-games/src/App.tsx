import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Form from './components/Form';
import GameList from './components/GameList';
import { AppState } from './store';

const App = (props: AppState): React.ReactElement => {
  const { query, results } = props;

  return (
    <div className="App">
      <Form />
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
  {}
)(App);
