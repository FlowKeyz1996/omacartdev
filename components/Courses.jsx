"use client";
import React from 'react'
import { courses } from '@/constants';

const Courses = () => {
  return (
    <>
    <div className="container mx-auto flex flex-col md:flex-row">
      <div className="flex justify-evenly items-center mb-4 md:mb-0">
        <h1 className="text-lg md:text-xl lg:text-2xl ml-6 text-[#000000]">Courses available on platform</h1>
        <h2 className="text-sm md:text-lg lg:text-lg ml-2 md:ml-[17rem] mt-2 md:mt-0">View all</h2>
      </div>
    </div>
    <div className="flex flex-col md:flex-row">
        {courses.map((course, index) => (
            <div className="shadow-xl p-2 rounded-lg mb-4 md:mb-0" key={course.id}>
             <img src={course.courseImage} alt="" className="m-5 rounded-t-lg" />
             <div className="ml-7">
             <h1 className="text-2xl mb-4">{course.courseTitle}</h1>
             <p className="max-w-[20rem] text-[#475467] mb-5">{course.courseDesc}</p>
             <button className="bg-[#27779B] text-white p-2 px-7 rounded-xl mt-2">{course.btn}</button>
             </div>
            </div>
        ))}
    </div>
    </>
  );
};

export default Courses;
