// components/FormComponent.js
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const FormComponent = ({ isRegisterPage }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: isRegisterPage ? '' : null,
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiUrl = isRegisterPage
        ? 'https://devapi.omacart.com/signup'
        : 'https://devapi.omacart.com/login';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok &&) {
        const responseData = await response.json();

        // Handle successful authentication
        alert('Authentication successful:', responseData);

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
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {isRegisterPage && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name || ''}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="Enter your name"
            />
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
            placeholder="Enter your password"
          />
        </div>

        {isRegisterPage ? (
          <p>
            Already have an account? <a href="/login">Log in</a>
          </p>
        ) : (
          <p>
            Don't have an account? <a href="/register">Register</a>
          </p>
        )}

        <button
          type="submit"
          className={`bg-blue-500 text-white px-4 py-2 rounded-md ${isRegisterPage ? 'w-full' : ''}`}
        >
          {isRegisterPage ? 'Register' : 'Log in'}
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
