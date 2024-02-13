// components/SidebarMenu.js
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faList } from '@fortawesome/free-solid-svg-icons';

const SidebarMenu = () => {
  return (
    <div className="bg-[#27779B]  text-white w-64 h-screen p-4 flex flex-col justify-between fixed md:left-0 md:bottom-0 md:top-0">
      <div>
        <div className="mb-4 mt-[5rem]">
          <input type="text" placeholder="Search" className="w-full p-2 bg-[#475467]  border-none rounded-md text-white" />
        </div>
        <div className="flex-col space-y-2">
          <Link href="/dashboard"className="flex hover:bg-[#344054] p-2 rounded">
            <img src="/home-line.svg" alt=""/><p className="hover:bg-[#344054] p-2 rounded">Home</p>
          </Link>
          <Link href="/dashboard" className="flex hover:bg-[#344054] p-2 rounded">
          <img src="/bar-chart-square-02.svg" alt=""/><p className="hover:bg-[#344054] p-2 rounded ">courses</p>
          </Link>
          <Link href="/dashboard" className="flex hover:bg-[#344054]  p-2 rounded">
          <img src="/users-01.svg" alt=""/><p className="hover:bg-[#344054] p-2 rounded">student</p>
          </Link>
          <Link href="/dashboard"className="flex hover:bg-[#344054] p-2 rounded">
          <img src="/layers-three-01.svg" alt=""/><p className="hover:bg-[#344054] p-2 rounded">Wallet</p>
          </Link>
        </div>
      </div>
      <div className="flex-col space-y-2">
        <Link href="/dashboard" className="flex hover:bg-[#344054] p-2 rounded">
        <img src="/life-buoy-01.svg" alt=""/><p className="hover:bg-[#344054]  p-2 rounded">Support</p>
        </Link>
        <Link href="/dashboard" className="flex hover:bg-[#344054] p-2 rounded">
        <img src="/settings-01.svg" alt=""/><p className="hover:bg-[#344054]  p-2 rounded">Settings</p>
        </Link>
      </div>
      <div className="dashboard">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <img src="/profile-image.jpg" alt="Profile Image" className="w-full h-full object-cover" />
        </div>
      <div>
        hello
      </div>
        
      </div>
    </div>
  );
};

export default SidebarMenu;
