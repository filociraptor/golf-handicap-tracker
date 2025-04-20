import React, { useState, useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';

const ScorecardForm = () => {
  const scorecardRef = useRef(null);
  const [scorecard, setScorecard] = useState(() => {
    const saved = localStorage.getItem('golfScorecard');
    return saved ? JSON.parse(saved) : {
      courseName: '',
      date: new Date().toISOString().split('T')[0],
      holes: Array(18).fill(''),
    };
  });

  useEffect(() => {
    localStorage.setItem('golfScorecard', JSON.stringify(scorecard));
  }, [scorecard]);

  const handleInputChange = (index, value) => {
    // Only allow numeric values
    if (value === '' || /^\d+$/.test(value)) {
      const newHoles = [...scorecard.holes];
      newHoles[index] = value;
      setScorecard({ ...scorecard, holes: newHoles });
    }
  };

  const handleCourseNameChange = (e) => {
    setScorecard({ ...scorecard, courseName: e.target.value });
  };

  const handleDateChange = (e) => {
    setScorecard({ ...scorecard, date: e.target.value });
  };

  const calculateTotal = (start, end) => {
    return scorecard.holes
      .slice(start, end)
      .reduce((sum, score) => sum + (score ? parseInt(score) : 0), 0);
  };

  const handleSave = () => {
    if (scorecard.courseName.trim() === '') {
      alert('Please enter a course name');
      return;
    }

    const scorecardData = {
      ...scorecard,
      frontNineTotal: calculateTotal(0, 9),
      backNineTotal: calculateTotal(9, 18),
      totalScore: calculateTotal(0, 18),
    };

    localStorage.setItem('golfScorecard', JSON.stringify(scorecardData));
    alert('Scorecard saved successfully!');
  };

  const handleExport = async () => {
    if (!scorecardRef.current) return;

    try {
      const canvas = await html2canvas(scorecardRef.current, {
        backgroundColor: '#ffffff',
        scale: 2, // Higher quality
      });

      const link = document.createElement('a');
      link.download = `${scorecard.courseName || 'golf-scorecard'}-${scorecard.date}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Error exporting scorecard:', error);
      alert('Error exporting scorecard. Please try again.');
    }
  };

  const frontNineTotal = calculateTotal(0, 9);
  const backNineTotal = calculateTotal(9, 18);
  const totalScore = frontNineTotal + backNineTotal;

  return (
    <div ref={scorecardRef} className="bg-white rounded-2xl shadow-md p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-green mb-6">Golf Scorecard</h2>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-gray mb-2">Course Name</label>
          <input
            type="text"
            value={scorecard.courseName}
            onChange={handleCourseNameChange}
            className="w-full p-2 border border-gray rounded-lg focus:ring-2 focus:ring-yellow focus:border-transparent"
            placeholder="Enter course name"
          />
        </div>
        <div>
          <label className="block text-gray mb-2">Date</label>
          <input
            type="date"
            value={scorecard.date}
            onChange={handleDateChange}
            className="w-full p-2 border border-gray rounded-lg focus:ring-2 focus:ring-yellow focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-9 gap-4 mb-6">
        {Array.from({ length: 18 }).map((_, index) => (
          <div key={index} className="text-center">
            <label className="block text-gray mb-1">Hole {index + 1}</label>
            <input
              type="text"
              value={scorecard.holes[index]}
              onChange={(e) => handleInputChange(index, e.target.value)}
              className="w-full p-2 border border-gray rounded-lg text-center focus:ring-2 focus:ring-yellow focus:border-transparent"
              maxLength={2}
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-gray bg-opacity-10 p-4 rounded-lg">
          <h3 className="text-gray font-semibold mb-2">Front 9</h3>
          <p className="text-2xl font-bold text-green">{frontNineTotal}</p>
        </div>
        <div className="bg-gray bg-opacity-10 p-4 rounded-lg">
          <h3 className="text-gray font-semibold mb-2">Back 9</h3>
          <p className="text-2xl font-bold text-green">{backNineTotal}</p>
        </div>
        <div className="bg-gray bg-opacity-10 p-4 rounded-lg">
          <h3 className="text-gray font-semibold mb-2">Total</h3>
          <p className="text-2xl font-bold text-green">{totalScore}</p>
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-green text-white rounded-lg hover:bg-opacity-90 transition-colors"
        >
          Save Scorecard
        </button>
        <button
          onClick={handleExport}
          className="px-6 py-2 bg-yellow text-gray rounded-lg hover:bg-opacity-90 transition-colors"
        >
          Export as PNG
        </button>
      </div>
    </div>
  );
};

export default ScorecardForm; 