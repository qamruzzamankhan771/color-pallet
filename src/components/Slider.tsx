import React from 'react';

interface SliderProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({ label, value, onChange }) => {
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    onChange(newValue);
  };

  return (
    <div className="mb-4">
      <label>{label}</label>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleSliderChange}
        className="form-range"
      />
      <div>{value}</div>
    </div>
  );
};

export default Slider;
