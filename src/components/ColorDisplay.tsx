import React from 'react';

interface ColorDisplayProps {
  color: string;
}

const ColorDisplay: React.FC<ColorDisplayProps> = ({ color }) => {
  const displayStyle = {
    backgroundColor: color,
    width: '100px',
    height: '100px',
    borderRadius: '50%',
  };

  return (
    <div>
      <h2>Selected Color</h2>
      <div style={displayStyle}></div>
    </div>
  );
};

export default ColorDisplay;
