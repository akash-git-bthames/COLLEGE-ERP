import React from "react";
import {useTheme} from './context/ColorContext'
import FirstPage from "./Components/FirstPage";

import DarkLightToggleButton from "./Components/DarkLightToggleButton";

function App() {
  const { theme, toggleTheme, color, changeColor } = useTheme();
  
  return (
    <div className="h-full w-full  dark:bg-gray-900 grid grid-cols-1 grid-rows-12 duration-200 ">
      <div className="col-span-1 row-span-1 bg-slate-700">
      <input
        type="color"
        id="colorPicker"
        onChange={(e) => changeColor(e.target.value)}
        value={color}
      /> 
       <button onClick={toggleTheme}>toggle</button>
       <DarkLightToggleButton/>
      </div>
      <div className="col-span-1 row-span-11">
      <FirstPage />
      </div>
    </div>
  );
}

export default App;
