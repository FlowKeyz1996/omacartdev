"use client";
import Form from '@/components/Form'

import React from 'react'

const page = () => {
  return (

    <div className="flex">
        
        <img src="/registerimage.svg" alt="" className="image-container w-[60rem] hidden md:block mx-auto" />
      <div className="form-container max-w-md mx-auto p-[3rem] w-full mt-[5rem]">
        <Form isRegisterPage={true} />
      </div>
      {/* Image container (Hide on mobile screens) */}
      
    </div>
  );



  
}

export default page