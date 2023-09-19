// src/components/App.tsx

import React from 'react';
import ColorPalette from './components/ColorPalette';

const App: React.FC = () => {
  
  return (
    <div className="App">
      <ColorPalette
        initialHue={120}
        initialSaturation={50}
        initialLightness={50}
      />
    </div>
  );
};

export default App;
