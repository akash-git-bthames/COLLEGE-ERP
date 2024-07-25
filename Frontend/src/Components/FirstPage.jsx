import React from "react";
import FirstPageCard from "./FirstPageCard";
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';

function FirstPage() {
    const name=['Admin','Teacher','Principal','Student']
  return (
    <div className="w-[90%] h-auto grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 m-auto ">
      <div className=" col-span-1 row-span-1 w-full p-2  ">
        <FirstPageCard icon={<AdminPanelSettingsOutlinedIcon sx={{fontSize:'120px'}}/>} name={name[0]}/>
      </div>
      <div className=" col-span-1 row-span-1  p-2">
      <FirstPageCard icon={<PersonOutlineOutlinedIcon sx={{fontSize:'120px'}}/>} name={name[1]}/>

      </div>
      <div className="  col-span-1 row-span-1  p-2">
      <FirstPageCard icon={<Person4OutlinedIcon sx={{fontSize:'120px'}}/>} name={name[2]}/>
      
      </div>
      <div className="  col-span-1 row-span-1  p-2">
      <FirstPageCard icon={<PeopleOutlineOutlinedIcon sx={{fontSize:'120px'}}/>} name={name[3]}/>
       
      </div>
    </div>
  );
}

export default FirstPage;
