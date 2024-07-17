import React from "react";
import {useTheme} from './context/ColorContext'
import FirstPage from "./Components/FirstPage";

function App() {
  const { theme, toggleTheme, color, changeColor } = useTheme();
  
  return (
    <div className="h-full w-full dark:bg-gray-900">
      <input
        type="color"
        id="colorPicker"
        onChange={(e) => changeColor(e.target.value)}
        value={color}
      /> 
       <button onClick={toggleTheme}>toggle</button>
      <FirstPage className=''/>
    </div>
  );
}

export default App;
