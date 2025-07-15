import React, { useContext, useState } from "react"
import { AlertCircle, Github } from "lucide-react"
import Loading from "../Loding"
import { Link, redirect, useNavigate } from "react-router-dom"
import axios from "axios"
import { webSocketContext } from "../../context/UserContext"


export default function Login() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const { serverUrl } = useContext(webSocketContext)
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const onSubmit = async (e) => {
    e.preventDefault()
    setError("")

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields")
      return
    }

    if(!formData.password) return setError("Password not match !")

    try {
      setIsLoading(true)
   
      const loginResponese = await axios.post(`${serverUrl}/login`, formData, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      })
      console.log(loginResponese.data);

      // if(loginResponese.headers){
        navigate('/')
      // }else{
      //   setError("Please try again")
      // }




    } catch (err) {
      setError("Invalid email or password")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 bg-gradient-to-b from-purple-50 to-white">
      {/* Page Title */}

      <div className="w-full max-w-md bg-white shadow-md rounded-2xl p-6 space-y-6">
        {/* Brand Logo and Welcome */}
        <div className="text-center space-y-2">
          <Link href="/" className="inline-block">
            <h2 className="text-3xl font-bold tracking-tight text-purple-900">ChatLock</h2>
          </Link>
          <h3 className="text-xl font-semibold tracking-tight">Welcome back</h3>
          <p className="text-sm text-gray-500">Sign in to your account to continue</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="flex items-center gap-2 bg-red-100 text-red-800 p-3 rounded-md text-sm">
            <AlertCircle className="w-4 h-4" />
            <span>{error}</span>
          </div>
        )}

        {/* Sign In Form */}
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              disabled={isLoading}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <a href="/forgot-password" className="text-xs text-purple-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              disabled={isLoading}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-md flex items-center justify-center transition-all duration-200"
          >
            {isLoading ? (
              <>
                <Loading className="w-4 h-4 mr-2" />
                Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-2">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-xs text-gray-500 uppercase">Or continue with</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        {/* OAuth Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button
            disabled={isLoading}
            onClick={() => { }}
            className="flex items-center justify-center border border-gray-300 rounded-md p-2 hover:bg-gray-50"
          >
            <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              <path d="M1 1h22v22H1z" fill="none" />
            </svg>
            Google
          </button>

          <button
            disabled={isLoading}
            onClick={() => { }}
            className="flex items-center justify-center border border-gray-300 rounded-md p-2 hover:bg-gray-50"
          >
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </button>
        </div>
      </div>

      {/* Footer Text */}
      <div className="text-center text-sm mt-4">
        <p className="text-gray-500">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="font-medium text-purple-600 hover:text-purple-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
