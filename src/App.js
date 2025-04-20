import React, { useState, useEffect } from 'react';
import PlayerList from './components/PlayerList';
import AddPlayerForm from './components/AddPlayerForm';
import ScorecardEntry from './components/ScorecardEntry';
import DirectScoreEntry from './components/DirectScoreEntry';
import Tabs from './components/Tabs';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
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
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
          <div className="min-h-screen bg-white p-8">
            <h1 className="text-4xl font-bold text-green mb-8">Golf Handicap Tracker</h1>
            <Tabs>
              <div label="Scorecard">
                <ScorecardEntry />
              </div>
              <div label="Direct Score">
                <DirectScoreEntry />
              </div>
            </Tabs>
            <div className="max-w-4xl mx-auto space-y-8">
              <AddPlayerForm onAddPlayer={addPlayer} />
              <PlayerList players={players} setPlayers={setPlayers} />
            </div>
            <div className="text-red-500">Hello, Tailwind!</div>
          </div>
        } />
      </Routes>
    </Router>
  );
};

export default App;
