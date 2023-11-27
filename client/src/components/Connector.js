import React, { useState, useEffect } from 'react';
import firebase from './config';

const DataView = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dbRef = firebase.database().ref('/Sensor/Temp');
        const snapshot = await dbRef.once('value');
        setData(snapshot.val());
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render

  if (loading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  return (
    <div>
      <h1>Data from Firebase</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataView;
