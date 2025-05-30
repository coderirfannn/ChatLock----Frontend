
 import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    agree: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.agree) {
      // Replace with your signup logic
      console.log(formData);
      navigate('/signin'); // jab button pe click hoga toh sigin page pe jayega..
    } else {
      alert('You must agree to the terms first.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-50 to-white px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md">
        <div className='font-serif font-bold tracking-tight bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent'>
        <h1 className="text-3xl font-bold text-center ">ChatLock</h1>
        </div>
        <h2 className="text-xl font-semibold text-center mt-2">Create an account</h2>
        <p className="text-sm text-gray-500 text-center mb-6">Sign up to get started with ChatLock</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="name@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="••••••••"
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              Must be at least 8 characters with a number and a special character
            </p>
          </div>

          <div className="flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="accent-purple-600"
              required
            />
            <label>
              I agree to the{' '}
              <a href="#" className="text-purple-600 underline">
                terms of service
              </a>{' '}
              and{' '}
              <a href="#" className="text-purple-600 underline">
                privacy policy
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md font-semibold hover:bg-purple-700 transition"
          >
            Create Account
          </button>
        </form>

        <div className="my-6 flex items-center justify-center text-sm text-gray-400">
          <hr className="w-full border-gray-300" />
          <span className="px-4">OR CONTINUE WITH</span>
          <hr className="w-full border-gray-300" />
        </div>

        <div className="flex justify-between gap-4">
          <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md hover:bg-gray-50 transition">
            <img src="https://img.icons8.com/color/24/google-logo.png" alt="Google" />
            Google
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md hover:bg-gray-50 transition">
            <img src="https://img.icons8.com/ios-glyphs/24/github.png" alt="GitHub" />
            GitHub
          </button>
        </div>

        <p className="text-center text-sm mt-6">
          Already have an account?{' '}
          <a href="/signin" className="text-purple-600 font-medium hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};


export default SignUp;

