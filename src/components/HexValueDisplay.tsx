// src/components/HexValueDisplay.tsx

import React from 'react';

interface HexValueDisplayProps {
  color: string;
}

const HexValueDisplay: React.FC<HexValueDisplayProps> = ({ color }) => {
  return (
    <div>
      <h3>Hex Value</h3>
      <div>{color}</div>
    </div>
  );
};

export default HexValueDisplay;
