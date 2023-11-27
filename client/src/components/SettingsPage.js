// SettingsPage.js
import React from 'react';
import Slider from './Slider';

const SettingsPage = ({ thresholds, onThresholdChange }) => {
  return (
    <div>
      <h1>Settings</h1>
      <div className="slider-container">
        {Object.entries(thresholds).map(([key, value]) => (
          <div key={key}>
            <h2>{key}</h2>
            <Slider value={value} onChange={(e) => onThresholdChange(key, e.target.value)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SettingsPage;
