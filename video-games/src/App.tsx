import React from 'react';
import './App.css';
import Form from './components/Form';
import GameList from './components/GameList';

const App: React.FC = (): React.ReactElement => {
  return (
    <div className="App">
      <Form />
      <GameList />
    </div>
  );
};

export default App;
