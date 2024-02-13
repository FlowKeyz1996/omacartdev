"use client";
import React from 'react'
import { courses, acts } from '@/constants';

const Courses = () => {
  return (
    <>
    <div className="container mx-auto flex flex-col md:flex-row">
      <div className="flex justify-evenly items-center mb-4 md:mb-0">
        <h1 className="text-lg md:text-xl lg:text-2xl lg:ml-6 md:mx-auto font-semibold text-[#000000]">Courses available on platform</h1>
        <h2 className="text-sm md:text-lg lg:text-lg ml-2 md:ml-[15rem] mt-2 md:mt-0">View all</h2>
      </div>
    
    </div>
    <div className="flex flex-col md:flex-row">
        {courses.map((course, index) => (
            <div className="shadow-xl rounded-lg mb-4 md:mb-0" key={course.id}>
             <img src={course.courseImage} alt="" className="m-5 rounded-t-lg" />
             <div className="ml-7">
             <h1 className="text-2xl mb-4">{course.courseTitle}</h1>
             <p className="max-w-[20rem] text-[#475467] mb-5">{course.courseDesc}</p>
             <button className="bg-[#27779B] text-white p-2 px-7 rounded-xl mt-2">{course.btn}</button>
             </div>
            </div>
        ))}
        <div className="m-3">
         <div>
            <h1 className="font-bold text-xl">Activity</h1>
        </div>
        {acts.map((act, index) => (
            <div className="mt-3 flex" key={act.id}>
            <img src={act.actAvatar} alt="avatar_img" className="m-2" />
            <div>
                <p>{act.actName}</p>
                <p className="text-[#475467]">{act.actPurpose}</p>
            </div>
            <img src={act.actDot} alt="" className="relative  bottom-4" />
        </div>

        ))}
        </div>
    </div>
    <div>
        
    </div>
    </>
  );
};

export default Courses;
