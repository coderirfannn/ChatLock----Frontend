import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


function AuthMain() {
  const [isLoading, setIsLoading] = useState(false);
  const nevigate =useNavigate();

  const handleSignIn = () => {
    setIsLoading(true);
    


    setTimeout(() => {
      setIsLoading(false);
         nevigate("/signin")

    }, 1500);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-purple-50 to-white"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md space-y-6"
      >
        <motion.div variants={itemVariants} className="text-center space-y-2">
          <Link to="/" className="inline-block">
            <motion.h1 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-3xl font-bold tracking-tight text-purple-900"
            >
              ChatLock
            </motion.h1>
          </Link>
          <motion.h2 variants={itemVariants} className="text-2xl font-semibold tracking-tight">
            Welcome back
          </motion.h2>
          <motion.p variants={itemVariants} className="text-sm text-gray-500">
            Sign in to your account to continue
          </motion.p>
        </motion.div>

        <motion.div variants={itemVariants}>

          
          <button
            onClick={handleSignIn}
            disabled={isLoading}
            className={`w-full flex items-center justify-center px-4 py-2 rounded-md text-white font-medium transition-all duration-300 ${
              isLoading
                ? 'bg-purple-400 cursor-not-allowed'
                : 'bg-purple-600 hover:bg-purple-700 shadow-md hover:shadow-lg'
            }`}
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </>
            ) : (
              'Sign In'
            )}
          </button>
        </motion.div>

        <motion.div variants={itemVariants} className="text-center text-sm">
          <p className="text-gray-500">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-purple-600 hover:text-purple-500 transition-colors duration-200"
            >
              Sign up
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default AuthMain;