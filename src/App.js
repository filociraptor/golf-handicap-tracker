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
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold text-green mb-8">Golf Handicap Tracker</h1>
      <div className="max-w-4xl mx-auto">
        <AddPlayerForm onAddPlayer={addPlayer} />
        <PlayerList players={players} setPlayers={setPlayers} />
      </div>
    </div>
  );
}

export default App;
