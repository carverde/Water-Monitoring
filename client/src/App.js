import React, { useState } from 'react';
import SettingsPage from './components/SettingsPage';
import DataView from './components/Connector';
import firebase from './components/config';

function App() {
  const [thresholds, setThresholds] = useState({
    pH: 3,
    turbidity: 0,
    conductivity: 0,
    temperature: 25,
  });

  const [currentPage, setCurrentPage] = useState('home');

  const handleThresholdChange = (sensor, value) => {
    // Convert the value to a float using parseFloat
    const floatValue = parseFloat(value);
  
    // Check if the parsed value is a valid number and not NaN
    if (!isNaN(floatValue) && typeof floatValue === 'number') {
      setThresholds((prevThresholds) => ({ ...prevThresholds, [sensor]: floatValue }));
  
      // Update Firebase with the new threshold value based on the sensor type
      switch (sensor) {
        case 'pH':
          firebase.database().ref('/Test/pH').set(floatValue);
          break;
        case 'conductivity':
          firebase.database().ref('/Test/Cond').set(floatValue);
          break;
        case 'temperature':
          firebase.database().ref('/Test/Temp').set(floatValue);
          break;
        case 'turbidity':
          firebase.database().ref('/Test/Tur').set(floatValue);
          break;
        default:
          break;
      }
    } else {
      // Handle invalid input (non-numeric or NaN)
      console.error(`Invalid input for ${sensor}: ${value}`);
    }
  };
  
  return (

    <div>
      <nav className="nav">
        <h2>Fullstack IoT Cutie Pies</h2>
        <button onClick={() => setCurrentPage('home')}>Data Center</button>
        <button onClick={() => setCurrentPage('settings')}>Threshold Control</button>
      </nav>
      {currentPage === 'home' && (<DataView />)}
      {currentPage === 'settings' && (
        <SettingsPage thresholds={thresholds} onThresholdChange={handleThresholdChange} />
      )}
    </div>
  );
};

export default App;