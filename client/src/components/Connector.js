// connector.js
import React, { useState, useEffect } from 'react';
import firebase from './config';
import SensorBox from './SensorBox'; // Import SensorBox component

const DataView = () => {
  const [sensorData, setSensorData] = useState({
    pH: null,
    turbidity: null,
    conductivity: null,
    temperature: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const dbRef = firebase.database().ref('/Sensor');

    const handleData = (snapshot) => {
      const data = snapshot.val();
      setSensorData({
        pH: data?.pH,
        turbidity: data?.Tur,
        conductivity: data?.Cond,
        temperature: data?.Temp,
      });
      setLoading(false);
      setError(null);
    };

    const handleError = (err) => {
      setError(err);
      setLoading(false);
    };

    dbRef.on('value', handleData, handleError);

    return () => {
      dbRef.off('value', handleData);
    };
  }, []);

  if (loading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  return (
    <div>
      <h1 style={{margin: '21px'}}>Real-Time Data</h1>
      <div className="sensor-container">
        {Object.entries(sensorData).map(([key, value]) => (
          <SensorBox key={key} title={key} value={value} />
        ))}
      </div>
    </div>
  );
};

export default DataView;
