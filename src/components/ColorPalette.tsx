// src/components/ColorPalette.tsx

import React, { useState } from 'react';
import ColorDisplay from './ColorDisplay';
import Slider from './Slider';
import HexValueDisplay from './HexValueDisplay';

interface ColorPaletteProps {
  initialHue: number;
  initialSaturation: number;
  initialLightness: number;
}

const ColorPalette: React.FC<ColorPaletteProps> = ({
  initialHue,
  initialSaturation,
  initialLightness,
}) => {
  const [hue, setHue] = useState(initialHue);
  const [saturation, setSaturation] = useState(initialSaturation);
  const [lightness, setLightness] = useState(initialLightness);

  const hexColor = `#${Math.floor(hue).toString(16)}${Math.floor(
    saturation
  ).toString(16)}${Math.floor(lightness).toString(16)}`;

  // Apply background color to the body element
  document.body.style.backgroundColor = hexColor;

  return (
    <div className="app-container">
      <h1 className="app-title">Color Palette App</h1>

      <div className="slider-container">
        <Slider
          label="Hue"
          value={hue}
          onChange={(newValue) => setHue(newValue)}
        />

        <Slider
          label="Saturation"
          value={saturation}
          onChange={(newValue) => setSaturation(newValue)}
        />

        <Slider
          label="Lightness"
          value={lightness}
          onChange={(newValue) => setLightness(newValue)}
        />
      </div>

      <div className="color-display">
        {/* <ColorDisplay color={`hsl(${hue}, ${saturation}%, ${lightness}%)`} /> */}
        <HexValueDisplay color={hexColor} />
      </div>
    </div>
  );
};

export default ColorPalette;
