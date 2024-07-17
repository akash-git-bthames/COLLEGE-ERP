import React from 'react'
import {useTheme} from '../context/ColorContext'
import { useState } from 'react';

function DarkLightToggleButton() {
  const [check,setCheck]=useState(false);
  const { theme, toggleTheme, color, changeColor } = useTheme();
  const handleCheck = () => {
    setCheck(!check);
  
    toggleTheme();
      
    
  }
  return (
    <label className="switch" >
  <input className="checkbox" type="checkbox" onClick={handleCheck} />
  <span className={`slider round   ${!check?'before:bg-slate-700 shadow-[inset_1px_1px_5px_0px_rgb(51,65,85)] ': 'before:bg-red-700'}`} style={{

    // boxShadow: '1px 1px 5px 0 rgb(51 65 85) inset'
    // '&:before':{boxShadow: '1px 1px 5px 0 rgb(51 65 85) inset'},
    
    
  }}></span>

</label>
  )
}

export default DarkLightToggleButton
