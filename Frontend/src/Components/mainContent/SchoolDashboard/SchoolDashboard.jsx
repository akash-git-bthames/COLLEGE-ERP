import React, { useState } from "react";
import SchoolDashboardCard from "./SchoolDashboardCard";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import StudentsOfEachGrade from "./StudentsOfEachGrade";


function SchoolDashboard() {
  
 

  const gradeArray = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];


 

  return (
    <div className=" w-full ">
      
      <div className=" w-full bg-slate-200 dark:bg-slate-700 flex xs:flex-col flex-row justify-around items-center md:text-sm text-[10px] border-b-2 border-slate-500 dark:border-slate-500 ">
        <div className="flex  items-center">
          <Groups2OutlinedIcon /> Total Enrollment : 67676
        </div>
        <div className="flex items-center">
          <Person2OutlinedIcon /> Total Boys : 5858
        </div>
        <div className="flex items-center">
          <Person3OutlinedIcon /> Total Girls : 8586
        </div>
      </div>
      <div className=" grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-2 gap-1 lg:p-8 md:p-5 sm:p-3 p-2  ">
        {gradeArray.map((val, idx) => (
          <SchoolDashboardCard
            key={idx}
            grade={val}
            className="col-span-1 row-span-1"
          />
        ))}
      </div>
      {/* implement the section also when backentd completed */}

      {/* <div className='w-full   h-auto overflow-scroll'>
     <StudentsOfEachGrade/>
      </div> */}
    </div>
  );
}

export default SchoolDashboard;
