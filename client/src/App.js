import React, { useState } from 'react';
import SettingsPage from './components/SettingsPage';
import DataView from './components/Connector';

function App() {
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
        <h2>Fullstack IoT Cutie Pies</h2>
        <button onClick={() => setCurrentPage('home')}>Data Center</button>
        <button onClick={() => setCurrentPage('settings')}>Threshold Control</button>
      </nav>
      {currentPage === 'settings' && (
        <SettingsPage thresholds={thresholds} onThresholdChange={handleThresholdChange} />
      )}
        <DataView />
    </div>
  );
};

export default App;