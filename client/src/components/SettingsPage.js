// SettingsPage.js
import React from 'react';

const SettingsPage = ({ thresholds, onThresholdChange }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Threshold</h1>
      <div className="input-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {Object.entries(thresholds).map(([key, value]) => (
          <div key={key} className="input-box" style={{ margin: '10px' }}>
            <label htmlFor={key} style={{ marginBottom: '5px' }}>{key}</label>
            <input
              type="number"
              id={key}
              value={value}
              onChange={(e) => onThresholdChange(key, e.target.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SettingsPage;
