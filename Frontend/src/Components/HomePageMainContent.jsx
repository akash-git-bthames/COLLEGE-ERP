import React, { useEffect, useState } from "react";
import SchoolDashboard from "./SchoolDashboard";
import SchoolProfile from "./SchoolProfile";
import NewAdmission from "./NewAdmission";
import SectionShift from "./SectionShift";
import Result from "./Result";
import FeeDetails from "./FeeDetails";
import ProgressActivity from "./ProgressActivity";
import TC from "./TC";
import SearchStudent from "./SearchStudent";
import QuestionPaper from "./QuestionPaper";

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
      className={`flex-grow h-full rounded-tl-lg rounded-bl-lg border-2 border-slate-500 transition-all duration-200 ease-in-out ${
        isOpen
          ? "ml-0"
          : "lg:ml-[-135px] md:ml-[-104px] sm:ml-[-76px] ml-[-48px]"
      }`}
    >
      <div className="p-4">{renderContent()}</div>
    </div>
  );
};

export default HomePageMainContent;
