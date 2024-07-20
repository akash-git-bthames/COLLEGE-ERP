import React,{useState,useRef} from 'react'
import SchoolDashboardCard from './SchoolDashboardCard'
import {useTheme} from '../context/ColorContext'
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';


import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

function SchoolDashboard() {

  const { color } = useTheme();
  const [year,setYear] = useState('current');



  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (value) => {
    setAnchorEl(null);
    
    setYear(value);
  };







  return (
    <div className='h-[100vh]     
                        
                         
    '>

      <div className='h-[6vh] flex justify-center items-center rounded-md gap-2' style={{backgroundColor:color}}>
                     <div className='lg:text-xl sm:text-lg text-md font-medium text-slate-950 dark:text-slate-300 '>School Details {year}</div>
                    
                    
        
      
         <ArrowDropDownCircleOutlinedIcon className='hover:cursor-pointer' fontSize='medium'
         
         id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
         
         
         />
     
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={()=>handleClose('2023-24')}>2023-24</MenuItem>
        <MenuItem onClick={()=>handleClose('2022-23')}>2022-23</MenuItem>
        <MenuItem onClick={()=>handleClose('2021-22')}>2021-22</MenuItem>
        <MenuItem onClick={()=>handleClose('2020-21')}>2020-21</MenuItem>
        <MenuItem onClick={()=>handleClose('2019-20')}>2019-20</MenuItem>
        <MenuItem onClick={()=>handleClose('2018-19')}>2018-19</MenuItem>
        <MenuItem onClick={()=>handleClose('2017-18')}>2017-18</MenuItem>
        <MenuItem onClick={()=>handleClose('2016-17')}>2016-17</MenuItem>
        <MenuItem onClick={()=>handleClose('2015-16')}>2015-16</MenuItem>
      </Menu>
                    
                    
                    
                     
      </div>
      <div className='h-[4vh] w-full bg-slate-200 dark:bg-slate-700 flex justify-around  items-center md:text-sm text-[10px] border-b-2 border-slate-500 dark:border-slate-500 overflow-x-scroll'>
        <div className='flex items-center '><Groups2OutlinedIcon/> Total Enrollment :</div>
        <div className='flex items-center'><Person2OutlinedIcon/> Total Boys :</div>
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
