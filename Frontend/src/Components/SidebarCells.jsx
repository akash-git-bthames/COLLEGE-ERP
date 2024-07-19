import React from "react";
import DvrOutlinedIcon from '@mui/icons-material/DvrOutlined';

function SidebarCells({ name, isOpen }) {
  console.log(isOpen);
  return (
    <li className={`p-1 dark:hover:bg-slate-700 border-slate-500 hover:bg-slate-300 hover:cursor-pointer text-slate-950 dark:text-slate-300 lg:text-xl md:text-lg sm:text-sm text-xs flex gap-1 ${isOpen ? 'justify-start' : 'justify-end'} items-center text-nowrap overflow-x-scroll`}>
      <DvrOutlinedIcon />
      {isOpen && <div>{name}</div>}
    </li>
  );
}

export default SidebarCells;
