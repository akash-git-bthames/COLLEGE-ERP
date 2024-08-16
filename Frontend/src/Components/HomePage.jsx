import React, { useState } from 'react';
import Drawer from '../Components/sidebar/Drawer';
import HomePageMainContent from './HomePageMainContent';

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [mainContent, setMainContent] = useState('');
  const [isClickedRightIconVal, setIsClickedRightIconVal] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const isClickedRightIcon = () => {
   setIsOpen(true);
  };

  return (
    <div className="w-full  flex gap-1 ">
      <Drawer isOpen={isOpen} toggleDrawer={toggleDrawer} setClickCell={setMainContent} isClickedRightIconVal={isClickedRightIconVal}/>
      <HomePageMainContent isOpen={isOpen} mainContent={mainContent} isClickedRightIcon={isClickedRightIcon}/>
    </div>
  );
}

export default HomePage;
