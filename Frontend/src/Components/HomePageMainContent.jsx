import React, { useEffect, useState } from "react";
import SchoolDashboard from "./mainContent/SchoolDashboard/SchoolDashboard";
import SchoolProfile from "./mainContent/SchoolProfile/SchoolProfile";
import NewAdmission from "./mainContent/NewAdmission/NewAdmission";
import SectionShift from "./mainContent/SectionShift/SectionShift";
import Result from "./mainContent/Result/Result";
import FeeDetails from "./mainContent/FeeDetails/FeeDetails";
import ProgressActivity from "./mainContent/ProgressActivity/ProgressActivity";
import TC from "./mainContent/TC/TC";
import SearchStudent from "./mainContent/SearchStudent/SearchStudent";
import QuestionPaper from "./mainContent/QuestionPaper/QuestionPaper";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import { useTheme } from "../context/ColorContext";
import MenuIcon from '@mui/icons-material/Menu';



const HomePageMainContent = ({ isOpen, mainContent,isClickedRightIcon }) => {
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

  const renderContent = () => {
    switch (mainContent) {
      case "School Dashboard":
        return <SchoolDashboard />;
      case "School Profile":
        return <SchoolProfile />;
      case "New Admission":
        return <NewAdmission />;
      case "Section Shift":
        return <SectionShift />;
      case "Result":
        return <Result />;
      case "Fee Details":
        return <FeeDetails />;
      case "Progress Activity":
        return <ProgressActivity />;
      case "TC":
        return <TC />;
      case "Search Student":
        return <SearchStudent />;
      case "Question Paper":
        return <QuestionPaper />;

      default:
        return <SchoolDashboard />;
    }
  };

  return (
    <div
      className={`flex-grow h-[100vh]  rounded-tl-lg rounded-bl-lg border-2 border-slate-500 text-slate-950 dark:text-slate-300 dark:bg-slate-800  bg-slate-50 transition-all duration-200 transform  overflow-hidden`}
    >


        <div className={` sm:hidden absolute top-2 left-1 bg-[rgba(30,41,59,0.2)] p-1 rounded-md `} onClick={isClickedRightIcon}>
          
          <MenuIcon/>
        </div>


      <div
        className="h-10 msm:h-12 flex justify-center items-center  gap-2"
        style={{ backgroundColor: color }}
      >
        <div className="sm:text-xl text-lg  font-medium text-slate-950 dark:text-slate-300">
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




      <div className="h-[calc(100vh-32px)] msm:h-[calc(100vh-48px)]  overflow-y-scroll">
        {renderContent()}
      </div>
    </div>
  );
};

export default HomePageMainContent;
