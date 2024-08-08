import React, { useState } from 'react';

const PlatformSelector = ({ onPlatformSelect }) => {
  const [selectedPlatform, setSelectedPlatform] = useState('');

  const handlePlatformChange = (event) => {
    const platform = event.target.value;
    setSelectedPlatform(platform);
    onPlatformSelect(platform);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Select a Platform</h2>
      <select
        value={selectedPlatform}
        onChange={handlePlatformChange}
        className="block w-full bg-gray-200 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="">Select a platform</option>
        <option value="youtube">YouTube (1280x720)</option>
        <option value="instagram">Instagram (1080x1080)</option>
        <option value="facebook">Facebook (1200x630)</option>
        <option value="twitter">Twitter (1024x512)</option>
      </select>
      {selectedPlatform && (
        <p className="mt-2 text-gray-600">You selected: {selectedPlatform}</p>
      )}
    </div>
  );
};

export default PlatformSelector;
