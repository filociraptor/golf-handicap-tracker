import React from 'react';

const PlayerList = ({ players }) => (
  <div>
    <h2>Players</h2>
    <ul>
      {players.map((player, index) => (
        <li key={index}>{player.name}</li>
      ))}
    </ul>
  </div>
);

export default PlayerList;
