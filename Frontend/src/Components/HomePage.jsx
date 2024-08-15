import React, { useState } from 'react';
import Drawer from '../Components/sidebar/Drawer';
import HomePageMainContent from './HomePageMainContent';

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [mainContent, setMainContent] = useState('');

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full h-[100vh] flex gap-1">
      <Drawer isOpen={isOpen} toggleDrawer={toggleDrawer} setClickCell={setMainContent}/>
      <HomePageMainContent isOpen={isOpen} mainContent={mainContent}/>
    </div>
  );
}

export default HomePage;
