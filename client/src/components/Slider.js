// Slider.js
import React from 'react';

const Slider = ({ value, onChange }) => {
  return (
    <input type="range" min="0" max="100" value={value} onChange={onChange} />
  );
};

export default Slider;
