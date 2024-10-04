import React, { useState } from 'react';

// import SearchModal from '../components/ModalSearch';
// import Notifications from '../components/DropdownNotifications';
// import Help from '../components/DropdownHelp';
import UserMenu from '../components/DropdownProfile';
// import ThemeToggle from '../components/ThemeToggle';

function Header({ sidebarOpen, setSidebarOpen }) {
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white dark:bg-[#182235] border-b border-slate-200 dark:border-slate-700 z-30 ">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 -mb-px">
          {/* Header: Left side */}
          <div className="flex lg:hidden">
            {/* Hamburger button */}
            <button
              className="text-slate-500 hover:text-slate-600 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={(e) => {
                e.stopPropagation();
                setSidebarOpen(!sidebarOpen);
              }}
            >
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>
          </div>

          <div className='flex'>
              <h1 className="text-blue-600 font-bold text-2xl">SMARTGROSIR</h1>
              <span className="text-xs text-blue-400 mt-1 w-9 h-6 mx-1.5 text-center pt-0.5 bg-blue-100 border border-blue-400 rounded-md">Lite</span>
            </div>

          {/* Header: Right side */}
          <div className="flex items-center space-x-3">
            <hr className="w-px h-6 bg-slate-200 dark:bg-slate-900 border-none" />
            <UserMenu align="right" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
