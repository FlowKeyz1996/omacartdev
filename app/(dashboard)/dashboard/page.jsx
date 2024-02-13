// pages/index.js
"use client"
import React from 'react';
import SidebarMenu from '@/components/SideBarMenu';
import Cards from '@/components/Cards';
import Courses from '@/components/Courses';

const page = () => {
  return (
    <div className="flex">
      <SidebarMenu />
      <div className="flex-1 p-4 rounded-l-[30rem]">
        <h1 className="text-3xl font-bold mb-4">Welcome back</h1>
        <p className="text-[#475467]">Track, manage and view your students and courses available.</p>
       <Cards/>
       <Courses/>
      </div>
    </div>
  );
};

export default page;
