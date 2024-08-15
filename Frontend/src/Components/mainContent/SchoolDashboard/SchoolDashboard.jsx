import React, { useState } from "react";
import SchoolDashboardCard from "./SchoolDashboardCard";
import { useTheme } from "../../../context/ColorContext";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import StudentsOfEachGrade from "./StudentsOfEachGrade";

function SchoolDashboard() {
  const { color } = useTheme();
  const [year, setYear] = useState("current");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const yearArray = [
    "2023-24",
    "2022-23",
    "2021-22",
    "2020-21",
    "2019-20",
    "2018-19",
    "2017-18",
    "2016-17",
    "2015-16",
  ];
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

  const handleClick = (event) => setAnchorEl(event.currentTarget);

  const handleClose = (value) => {
    setAnchorEl(null);

    // Validate that value is a string
    if (typeof value === "string") {
      setYear(value);
    } else {
      console.error("Invalid year value:", value);
    }
  };

  return (
    <div className="h-[100vh] w-full ">
      <div
        className=" flex justify-center items-center rounded-md gap-2"
        style={{ backgroundColor: color }}
      >
        <div className="lg:text-xl sm:text-lg text-md font-medium text-slate-950 dark:text-slate-300">
          School Details {year}
        </div>
        <ArrowDropDownCircleOutlinedIcon
          className="hover:cursor-pointer"
          fontSize="medium"
          id="fade-button"
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        />
        <Menu
          id="fade-menu"
          MenuListProps={{ "aria-labelledby": "fade-button" }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          {yearArray.map((year, idx) => (
            <MenuItem key={idx} onClick={() => handleClose(year)}>
              {year}
            </MenuItem>
          ))}
        </Menu>
      </div>
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
      <div className="h-[90vh] grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-2 gap-1 lg:p-10 md:p-6 sm:p-4 p-3">
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
