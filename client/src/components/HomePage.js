// HomePage.js
import React from 'react';
import SensorBox from './SensorBox';

const HomePage = ({ sensorValues }) => {
  return (
    <div>
      <h1>Home</h1>
      <div className="sensor-container">
        {Object.entries(sensorValues).map(([key, value]) => (
          <SensorBox
            key={key}
            title={key}
            value={value}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
