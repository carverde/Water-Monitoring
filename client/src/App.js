// App.js
import React, { useState } from 'react';
import HomePage from './components/HomePage';
import SettingsPage from './components/SettingsPage';
import DataView from './components/Connector';

function App() {

  const [sensorValues] = useState({
    pH: 7.0,
    turbidity: 10,
    conductivity: 500,
    temperature: 25,
  });

  const [sensorHistory] = useState({
    pH: [],
    turbidity: [],
    conductivity: [],
    temperature: [],
  });

  const [thresholds, setThresholds] = useState({
    pH: 50,
    turbidity: 30,
    conductivity: 70,
    temperature: 80,
  });

  const [currentPage, setCurrentPage] = useState('home');

  const handleThresholdChange = (sensor, value) => {
    setThresholds((prevThresholds) => ({ ...prevThresholds, [sensor]: value }));
  };

  return (
    <div>
      <nav className="nav">
        <button onClick={() => setCurrentPage('home')}>Home</button>
        <button onClick={() => setCurrentPage('settings')}>Settings</button>
      </nav>

      {currentPage === 'home' && <HomePage sensorValues={sensorValues} sensorHistory={sensorHistory} />}
      {currentPage === 'settings' && (
        <SettingsPage thresholds={thresholds} onThresholdChange={handleThresholdChange} />
      )}
        <DataView />
    </div>
  );
};

export default App;
