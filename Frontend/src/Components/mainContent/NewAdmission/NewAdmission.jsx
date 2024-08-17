import React from 'react'
import { useTheme } from '../../../context/ColorContext'

function NewAdmission() {
  const { color } = useTheme();
  return (
    <div className=''>
      <div className='text-sm font-medium bg-slate-200 border-b border-slate-400/70'>
        Total New Admission This Year : <span style={{color:color}}>450</span>

      </div>
    </div>
  )
}

export default NewAdmission
