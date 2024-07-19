import React from 'react';

const HomePageMainContent = ({ isOpen }) => {
  return (
    <div
      className={`flex-grow h-full rounded-tl-lg rounded-bl-lg  border-2  border-slate-500 transition-all duration-200 ease-in-out  ${isOpen ? 'ml-0':'lg:ml-[-135px] md:ml-[-104px] sm:ml-[-76px] ml-[-48px] '}`}
    //   style={{ marginLeft: isOpen ? '0' : '-130px' }} // Adjust the margin-left based on the isOpen state
    >
      {/* Main content goes here */}
      <div className="p-4">
        <h1>Welcome to the Home Page</h1>
        {/* Other content */}
      </div>
    </div>
  );
};

export default HomePageMainContent;
