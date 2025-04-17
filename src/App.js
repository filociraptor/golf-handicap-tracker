import React, { useState, useEffect } from 'react';
import PlayerList from './components/PlayerList';
import AddPlayerForm from './components/AddPlayerForm';

function App() {
  const [players, setPlayers] = useState(() => {
    const saved = localStorage.getItem('golfPlayers');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('golfPlayers', JSON.stringify(players));
  }, [players]);

  const addPlayer = (name) => {
    setPlayers([...players, { name, scores: [] }]);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Golf Handicap Tracker</h1>
      <AddPlayerForm onAddPlayer={addPlayer} />
      <PlayerList players={players} setPlayers={setPlayers} />
    </div>
  );
}

export default App;
