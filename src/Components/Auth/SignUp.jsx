import React, { useContext, useEffect, useState } from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, AlertCircle, Github } from 'lucide-react';
import Loading from '../Loding';
import { webSocketContext } from '../../context/UserContext';
// import { WebSocket } from 'websocket-client';
import axios from 'axios';

export default function Signup() {

  const { serverUrl } = useContext(webSocketContext)

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    agree: false
  });

  // console.log(formData);


  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState("baby i am bad");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    


    if (!formData.agree) {
      setError('You must agree to the terms first.');
      return;
    }

    setIsSubmitting(true);

    try {

      const registerResponse = await axios.post(`${serverUrl}/register`, formData, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      })


      // useEffect(() => {
      //   if (success) {
      //     const timer = setTimeout(() => {
      //       setSuccess("User Register Successfully");
      //     }, 2000);
      //     return () => clearTimeout(timer);
      //   }
      // }, [success]);


      if (registerResponse.status === 200) {
        setSuccess("User Register Successfully");

        setTimeout(() => {
          console.log(formData);
          setIsSubmitting(false);
          navigate('/signin');
        }, 3000);
      }

      console.log(registerResponse.data);

    } catch (error) {
      setError(error)
    }



  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-100 to-white px-4 py-8">
      <div className="w-full max-w-md bg-white shadow-md rounded-xl p-5 space-y-5 relative">
        <div className="text-center space-y-3">
          {success && <h1 className="text-green-600 font-semibold text-lg">{success}</h1>}

          <Link to="/" className="inline-block">
            <h2 className="text-2xl font-bold text-purple-900">ChatLock</h2>
          </Link>
          <h3 className="text-lg font-semibold">Create an account</h3>
          <p className="text-sm text-gray-500">Sign up to get started</p>
        </div>

        {error && (
          <div className="flex items-center gap-2 bg-red-100 text-red-800 p-2 rounded-md text-xs">
            <AlertCircle className="w-4 h-4" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 text-sm"
              placeholder="John Doe"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 text-sm"
              placeholder="name@example.com"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 text-sm"
                placeholder="••••••••"
                required
                disabled={isSubmitting}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-2 right-2 text-gray-500 hover:text-purple-600"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Use at least 8 characters including a number & special character.
            </p>
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="agree"
              id="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="accent-purple-600 mt-1"
              disabled={isSubmitting}
              required
            />
            <label htmlFor="agree" className="text-xs text-gray-700 cursor-pointer">
              I agree to the{" "}
              <a href="#" className="text-purple-600 underline">terms</a> and{" "}
              <a href="#" className="text-purple-600 underline">privacy policy</a>.
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-md flex items-center justify-center transition-colors duration-200 text-sm"
          >
            {isSubmitting ? (
              <>
                <Loading className="w-4 h-4 mr-2" />
                Creating account...
              </>
            ) : (
              'Create Account'
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-2">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-xs text-gray-500">Or continue with</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        {/* OAuth Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button
            disabled={isSubmitting}
            onClick={() => { }}
            className="flex items-center justify-center border border-gray-300 rounded-md p-2 hover:bg-gray-50 text-sm"
          >
            <img src="https://img.icons8.com/color/24/google-logo.png" alt="Google" className="w-4 h-4" />
            <span className="ml-2">Google</span>
          </button>

          <button
            disabled={isSubmitting}
            onClick={() => { }}
            className="flex items-center justify-center border border-gray-300 rounded-md p-2 hover:bg-gray-50 text-sm"
          >
            <Github className="w-4 h-4" />
            <span className="ml-2">GitHub</span>
          </button>
        </div>

        {/* Footer */}
        <div className="text-center text-xs mt-4">
          <p className="text-gray-500">
            Already have an account?{" "}
            <Link to="/signin" className="font-medium text-purple-600 hover:text-purple-500">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}