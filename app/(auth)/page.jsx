"use client";
import React from 'react';
import Form
 from '@/components/Form';

const page = () => {
  return (
    <div className="flex">
        <div className="form-container max-w-md mx-auto p-[3rem] w-[50rem] flex-1 mt-[5rem]">
        <Form isRegisterPage={false} />
      </div>
        
        <img src="/loginimage.svg" alt="" className="image-container  hidden md:block" />
      
      {/* Image container (Hide on mobile screens) */}
      
    </div>
  )
}

export default page