import React from 'react'
import SchoolDashboardCard from './SchoolDashboardCard'
import {useTheme} from '../context/ColorContext'
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';

function SchoolDashboard() {

  const { color } = useTheme();
  return (
    <div className='h-[100vh]     
                        
                         
    '>

      <div className='h-[6vh] flex justify-center items-center rounded-md gap-2' style={{backgroundColor:color}}>
                     <div className='lg:text-xl sm:text-lg text-md font-medium text-slate-950 dark:text-slate-300 '>School Details 2023-24</div>
                     <ArrowDropDownCircleOutlinedIcon className='hover:cursor-pointer'/>
                     
      </div>
      <div className='h-[4vh] w-full bg-slate-200 dark:bg-slate-700 flex justify-around  items-center md:text-sm text-[10px] border-b-2 border-slate-500 dark:border-slate-500 overflow-x-scroll'>
        <div className='flex items-center'><Groups2OutlinedIcon /> Total Enrollment :</div>
        <div className='flex items-center'><Person2OutlinedIcon/>Total Boys :</div>
        <div className='flex items-center'><Person3OutlinedIcon/> Total Girls :</div>
      </div>

      <div  className='h-[90vh] grid  lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 
                            md:gap-2 gap-1 lg:p-10 md:p-6 sm:p-4 p-3'>
      <SchoolDashboardCard className='col-span-1 row-span-1'/>
      <SchoolDashboardCard className='col-span-1 row-span-1'/>
      <SchoolDashboardCard className='col-span-1 row-span-1'/>
      <SchoolDashboardCard className='col-span-1 row-span-1'/>
      <SchoolDashboardCard className='col-span-1 row-span-1'/>
      <SchoolDashboardCard className='col-span-1 row-span-1'/>
      <SchoolDashboardCard className='col-span-1 row-span-1'/>
      <SchoolDashboardCard className='col-span-1 row-span-1'/>
      <SchoolDashboardCard className='col-span-1 row-span-1'/>
      <SchoolDashboardCard className='col-span-1 row-span-1'/>
      <SchoolDashboardCard className='col-span-1 row-span-1'/>
      <SchoolDashboardCard className='col-span-1 row-span-1'/>
      <SchoolDashboardCard className='col-span-1 row-span-1'/>
      <SchoolDashboardCard className='col-span-1 row-span-1'/>
      </div>

      
  
    </div>
  )
}

export default SchoolDashboard
