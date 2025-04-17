import React, { useState } from 'react';

const AddPlayerForm = ({ onAddPlayer }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onAddPlayer(name.trim());
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Player name"
      />
      <button type="submit">Add Player</button>
    </form>
  );
};

export default AddPlayerForm;
