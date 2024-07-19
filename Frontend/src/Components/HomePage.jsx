import React, { useState } from 'react';
import Drawer from './Drawer';
import HomePageMainContent from './HomePageMainContent';

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full h-[100vh] flex gap-1">
      <Drawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
      <HomePageMainContent isOpen={isOpen} />
    </div>
  );
}

export default HomePage;
