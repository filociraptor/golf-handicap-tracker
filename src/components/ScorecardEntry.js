import React from 'react';

const ScorecardEntry = () => {
  return (
    <div>
      <h2 className="text-xl font-bold">Enter Scorecard</h2>
      {/* Add your scorecard entry form here */}
      <form>
        {/* Example input fields */}
        <input type="text" placeholder="Player Name" className="p-2 border rounded" />
        <input type="number" placeholder="Score" className="p-2 border rounded" />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">Submit Scorecard</button>
      </form>
    </div>
  );
};

export default ScorecardEntry;
