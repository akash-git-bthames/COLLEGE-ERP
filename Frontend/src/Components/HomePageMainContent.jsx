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

const HomePageMainContent = ({ isOpen, mainContent }) => {
  console.log(mainContent);

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
      className={`flex-grow h-[100vh]  rounded-tl-lg rounded-bl-lg border-2 border-slate-500 text-slate-950 dark:text-slate-300 dark:bg-slate-800  bg-slate-50 transition-all duration-200 transform `}
    >


      {renderContent()}


    </div>
  );
};

export default HomePageMainContent;
