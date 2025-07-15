import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Bell,
  Home,
  LogOut,
  Menu,
  MessageCircle,
  Search,
  Settings,
  User,
  X
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'
// import { profileData } from '../../data/Data.jsx'
// console.log(profileData);




function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const searchRef = useRef(null)
  const profileRef = useRef(null)
  const navigate = useNavigate();


  // Close menus when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchFocused(false)
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen || isProfileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen, isProfileMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    setIsProfileMenuOpen(false)
  }

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen)
    setIsMenuOpen(false)
  }

  const handleSearchFocus = () => {
    setIsSearchFocused(true)
  }

  const handleSearchBlur = () => {
    if (!searchQuery) {
      setIsSearchFocused(false)
    }
  }

  const clearSearch = () => {
    setSearchQuery('')
    setIsSearchFocused(false)
  }

  const handleLogout = async () => {

  try {
    const response = await axios.post(
      "http://localhost:3000/logout",
      {}, // empty body
      { withCredentials: true } // config object as third param
    );

    console.log("User logged out successfully");

    if (response.status === 200) {
      navigate("/signin");
    }
  } catch (error) {
    console.error("Logout failed:", error.response?.data || error.message);
    // Optionally show toast or error message to user
  }
};

  const navItems = [
    { icon: Home, label: 'Home', path: '/feed' },
    { icon: MessageCircle, label: 'Messages', path: '/messages' },
    { icon: Bell, label: 'Notifications', path: '/notifications', badge: 3 },
    { icon: User, label: 'Profile', path: '/profile' },
    { icon: Settings, label: 'Settings', path: '/settings' }
  ]

  const profileMenuItems = [
    { icon: User, label: 'Profile', action: () => console.log('Profile') },
    { icon: Settings, label: 'Settings', action: () => console.log('Settings') },
    { icon: LogOut, label: 'Log out', action: () => console.log('Logout'), isDestructive: true }
  ]

const handelData = async()=>{
  await axios.get(`${serverUr}/profile`);

}

 const data = {
handelData
}
console.log(data);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none transition-colors"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center flex-1 sm:flex-none">
            <Link
              to="/feed"
              className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-md"
            >
              <motion.div
                className="w-8 h-8 bg-gradient-to-r  from-purple-600 to-pink-500  rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-white font-bold text-sm">CL</span>
              </motion.div>
              <motion.span
                className="text-xl font-bold  hidden sm:inline "
                whileHover={{ scale: 1.02 }}
              >
                <div className='text-2xl font-serif font-bold tracking-tight bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent'>ChatLock</div>

              </motion.span>
            </Link>
          </div>

          {/* Search */}
          <div
            ref={searchRef}
            className={`${isSearchFocused ? 'absolute inset-x-0 mx-4 z-50' : 'hidden'} sm:flex-1 sm:max-w-lg sm:mx-8 sm:relative`}
          >
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search ChatLock..."
                className="pl-10 pr-8 py-2 w-full rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:bg-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={handleSearchFocus}
                onBlur={handleSearchBlur}
                ref={searchRef}
              />
              {(isSearchFocused || searchQuery) && (
                <button
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  onClick={clearSearch}
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center space-x-2">
            {navItems.slice(0, 3).map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="p-2 hover:bg-gray-50 rounded-full relative transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
                aria-label={item.label}
              >
                <item.icon className="h-5 w-5 text-gray-700" />
                {item.badge && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}

            {/* Profile Menu */}
            <div className="relative" ref={profileRef}>
              <button
                onClick={toggleProfileMenu}
                className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 overflow-hidden focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                aria-label="Profile menu"
              >
                <img
                  src="/placeholder.svg"
                  alt="User profile"
                  className="h-full w-full object-cover"
                />
              </button>

              <AnimatePresence>
                {isProfileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-56 bg-white border border-gray-100 rounded-lg shadow-lg z-50 overflow-hidden"
                  >
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-medium">John Doe</p>
                      <p className="text-xs text-gray-500 truncate">john@example.com</p>
                    </div>
                    <div className="py-1">
                      {profileMenuItems.map((item, index) => (
                        <button
                          key={index}
                          onClick={item.action}
                          className={`flex items-center w-full px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${item.isDestructive ? 'text-red-600' : 'text-gray-700'}`}
                        >
                          <item.icon className="mr-2 h-4 w-4" />
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile search and profile buttons */}
          {!isSearchFocused && (
            <div className="flex items-center space-x-2 sm:hidden">
              <button
                onClick={handleSearchFocus}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors focus:outline-none"
                aria-label="Search"
              >
                <Search className="h-5 w-5 text-gray-700" />
              </button>
              <button
                onClick={toggleProfileMenu}
                className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 overflow-hidden focus:outline-none focus:ring-2 focus:ring-purple-500"
                aria-label="Profile menu"
              >
                <img
                  src="/placeholder.svg"
                  alt="User profile"
                  className="h-full w-full object-cover"
                />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden bg-white border-t border-gray-100 shadow-md"
          >
            <div className="px-2 pt-2 pb-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="flex items-center px-3 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.label}
                  {item.badge && (
                    <span className="ml-auto bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {item.badge}
                    </span>
                  )}
                </Link>
              ))}
              {/* <button onClick={handleLogout} className="flex items-center w-full px-3 py-3 text-base font-medium text-red-600 hover:bg-gray-50 rounded-lg transition-colors">
                <LogOut className="mr-3 h-5 w-5"  />
                Log out
              </button> */}

                <button
                          onClick={handleLogout}
                          className="flex items-center gap-3 w-full px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                        >
                          <LogOut size={20} />
                          <span className="text-sm font-medium">Logout</span>
                        </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Profile Menu */}
      <AnimatePresence>
        {isProfileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="sm:hidden fixed inset-0 z-40 bg-black bg-opacity-50"
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30 }}
              className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-xl"
            >
              <div className="px-4 py-3 border-b border-gray-200">
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-gray-500">john@example.com</p>
              </div>
              <div className="px-1 py-1">
                {profileMenuItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      item.action()
                      setIsProfileMenuOpen(false)
                    }}
                    className={`flex items-center w-full px-4 py-3 text-sm hover:bg-gray-50 rounded-lg ${item.isDestructive ? 'text-red-600' : 'text-gray-700'}`}
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="px-4 py-3 border-t border-gray-200">
                <button
                  onClick={() => setIsProfileMenuOpen(false)}
                  className="w-full py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default React.memo(Header)