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
  <span 
  className={`slider round ${!check ? 'before:bg-slate-700' : ''}`} 
  style={{
    boxShadow: `inset 1px 1px 5px 0 ${check ? color : 'rgb(51, 65, 85)'}`,
    '--dynamic-before-color': check ? color : 'rgb(255, 0, 0)' ,
    
  }}
></span>



</label>
  )
}

export default DarkLightToggleButton
