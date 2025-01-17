import React from "react";
import { useTheme } from "../../../context/ColorContext";
function SchoolDashboardCard({ grade }) {
  const { color } = useTheme();

  const totalBoys = 250;
  const totalGirls = 150;
  const sections = ["A", "B", "C", "D"];

  return (
    <div className="h-40 w-full sm:border-2 border-[0.1px] border-slate-500 shadow-md hover:shadow-slate-400 dark:hover:shadow-slate-600 duration-200 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-200 hover:cursor-pointer">
      <div
        className=" h-[50%] lg:text-6xl font-bold md:text-5xl sm:text-4xl text-2xl flex justify-center items-center"
        style={{ color: color }}
      >
        {grade}
      </div>

      <div className="flex h-[20%] justify-evenly items-center lg:text-md  md:text-sm  text-xs font-medium  ">
        <div>Boys : {totalBoys}</div>
        <div>Girls : {totalGirls}</div>
      </div>
      <div className="h-[30%] flex justify-around items-center lg:text-xl  md:text-lg text-md   font-medium ">
        {sections.map((section, index) => (
          <div
            key={index}
            className=" px-2 my-2   rounded-sm sm:rounded-md bg-slate-100 dark:bg-slate-700 shadow-md shadow-slate-400 dark:shadow-slate-500"
          >
            {section}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SchoolDashboardCard;
