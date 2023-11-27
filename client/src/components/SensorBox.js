// SensorBox.js
import React from 'react';

const SensorBox = ({ title, value }) => {
  return (
    <div className="sensor-box">
      <h2>{title}</h2>
      <p>{value}</p>
    </div>
  );
};

export default SensorBox;
