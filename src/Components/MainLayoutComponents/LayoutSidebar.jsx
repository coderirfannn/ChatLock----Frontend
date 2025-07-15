import React, { useState } from "react";
import { 
  Home, 
  Search, 
  PlusSquare, 
  MessageCircle, 
  Heart, 
  User,
  LogOut,
  Menu,
  X
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const menuItems = [
  { name: "Home", icon: <Home size={20} />, link: "/" },
  { name: "Search", icon: <Search size={20} />, link: "/search" },
  { name: "Create", icon: <PlusSquare size={20} />, link: "/create" },
  { name: "Messages", icon: <MessageCircle size={20} />, link: "/messages" },
  { name: "Notifications", icon: <Heart size={20} />, link: "/notifications" },
  { name: "Profile", icon: <User size={20} />, link: "/profile" },
];

export const LayoutSidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

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


  return (
    <>
      {/* Mobile menu button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-sm"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white border-r shadow-sm flex flex-col justify-between z-40 transition-all duration-300 ease-in-out
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <div className="py-6 flex flex-col gap-4 px-4">

          <h1 className="text-2xl font-bold mb-6 px-2 hidden md:block">ChatLock</h1>
          
          {/* Mobile header */}
          <div className="flex items-center justify-between md:hidden mb-4">
            <h1 className="text-xl font-bold">ChatLock</h1>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-1 rounded-full hover:bg-gray-100"
            >
              <X size={20} />
            </button>
          </div>

          {menuItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded-lg transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-gray-700">{item.icon}</span>
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          ))}
        </div>

        <div className="p-4 border-t">
          {/* Logout button */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
          >
            <LogOut size={20} />
            <span className="text-sm font-medium">Logout</span>
          </button>

        
        </div>
      </div>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};