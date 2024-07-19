import React from "react";
import {useTheme} from './context/ColorContext'
import FirstPage from "./Components/FirstPage";

import DarkLightToggleButton from "./Components/DarkLightToggleButton";
import HomePage from "./Components/HomePage";

function App() {
  const { theme, toggleTheme, color, changeColor } = useTheme();
  
  return (
    <div className="min-h-screen w-full  dark:bg-slate-900  duration-200 ">
      <div className="h-12 flex  justify-end items-center gap-4 pr-10">
     
      <DarkLightToggleButton />
      <input
  type="color"
  id="colorPicker"
  onChange={(e) => changeColor(e.target.value)}
  value={color}
  className="h-7 w-7  cursor-pointer rounded-full bg-transparent"
/>

       
       
      </div>
      <div className=" ">
      {/* <FirstPage /> */}
      <HomePage/>
      </div>
    </div>
  );
}

export default App;
