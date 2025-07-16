import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loading from '../Loding';


function Authmain() {
  const [isLoading, setIsLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const navigate = useNavigate();


  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSignIn = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/signin"); 
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

  if (pageLoading) {
    return <Loading fullScreen={true} size="large" />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
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
              className="text-5xl font-serif font-bold tracking-tight bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"
            >
              ChatLock
            </motion.h1>
          </Link>
          <motion.h2 variants={itemVariants} className="text-2xl font-semibold text-gray-800">
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
            className={`w-full flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 ${
              isLoading
                ? 'bg-purple-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 shadow-md hover:shadow-lg'
            }`}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <Loading size="small" />
                <span>Authenticating....</span>
              </div>
            ) : (
              'Sign In'
            )}
          </button>
        </motion.div>

        <motion.div variants={itemVariants} className="text-center text-sm">
          <p className="text-gray-500">
            Don't have an account?{" "}
            <motion.span whileHover={{ scale: 1.05 }}>
              <Link
                to="/signup"
                className="font-medium text-purple-600 hover:text-purple-500 transition-colors duration-200"
              >
                Sign up
              </Link>
            </motion.span>
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Authmain;