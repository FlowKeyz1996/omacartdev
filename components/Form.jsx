// components/FormComponent.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

const FormComponent = ({ isRegisterPage }) => {
  const { register, handleSubmit, setValue } = useForm();
  const router = useRouter();

  const onSubmit = async (formData) => {
    try {
      const apiUrl = isRegisterPage
        ? 'https://devapi.omacart.com/signupapi/signup'
        : 'https://devapi.omacart.com/login';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData = await response.json();

        // Handle successful authentication
        console.log('Authentication successful:', responseData);

        // Redirect to the dashboard page after successful authentication
        router.push('/dashboard');
      } else {
        // Handle authentication error
        console.error('Authentication error:', response.status);
      }
    } catch (error) {
      // Handle fetch error
      console.error('Fetch error:', error);
    }
  };

  return (
    <div className="form-container w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-container flex flex-col w-full max-w-md mx-auto">
      {isRegisterPage ? (
        <h1 className="text-2xl font-bold mb-[5rem] font-inter">Sign Up</h1>
      ) : (
        <h1 className="text-2xl font-bold mb-4 items-center ju">Welcome Back</h1>
        
      )}
      </div>
     
        {isRegisterPage && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              {...register('name')}
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="Enter your name"
            />
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            {...register('email')}
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password*
          </label>
          <input
            type="password"
            id="password"
            name="password"
            {...register('password')}
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
            placeholder="Enter your password"
          />
          {isRegisterPage ? (<small>less than later</small>) : (<></>)}
        </div>
        <button
          type="submit"
          className={`bg-[#27779B] mt-[7rem] mb-[5rem] text-white px-4 py-2 rounded-md ${isRegisterPage ? 'w-full' : ''}`}
        >
          {isRegisterPage ? 'Get Started' : 'Log in'}
        </button>
    
        {isRegisterPage ? (
          <p className="text-[#475467]  flex items-center justify-center">
            Already have an account? <a href="/login" className="text-[#27779B]">Log in</a>
          </p>
        ) : (
          <p className="text-[#475467]">
            Don't have an account? <a href="/register">Register</a>
          </p>
        )}

        
      </form>
    </div>
  );
};

export default FormComponent;
