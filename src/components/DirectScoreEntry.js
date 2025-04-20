import React from 'react';

const DirectScoreEntry = () => {
  return (
    <div>
      <h2 className="text-xl font-bold">Enter Score Directly</h2>
      {/* Add your direct score entry form here */}
      <form>
        {/* Example input fields */}
        <input type="text" placeholder="Player Name" className="p-2 border rounded" />
        <input type="number" placeholder="Score" className="p-2 border rounded" />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">Submit Score</button>
      </form>
    </div>
  );
};

export default DirectScoreEntry;
