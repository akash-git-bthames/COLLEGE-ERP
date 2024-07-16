import React from "react";
import {useTheme} from './context/ColorContext'

function App() {
  const { theme, toggleTheme, color, changeColor } = useTheme();
  return (
    <div>
      <input
        type="color"
        id="colorPicker"
        onChange={(e) => changeColor(e.target.value)}
        value={color}
      />
    </div>
  );
}

export default App;
