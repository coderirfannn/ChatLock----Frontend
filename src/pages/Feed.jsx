import React from "react";
import Header from "../components/feedcomponent/Header";
import PostList from "../components/feedcomponent/PostList";
import { Sidebar } from "../Components/feedcomponent/RightSidebar";
import Post from "../components/feedcomponent/Post";

function Feed() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top Header - fixed position for better mobile experience */}
      {/* <Header /> */}
      
      {/* Main content area with proper spacing and responsive layout */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 mt-16 md:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Feed Section - reorders on mobile to show content first */}
          <div className="lg:col-span-3 space-y-6 order-2 lg:order-1">
          <Post></Post>
          </div>

          {/* Sidebar Section - full width on mobile, collapses to right on desktop */}
          <div className="lg:col-span-1 order-1 lg:order-2">
            <Sidebar />
          </div>
        </div>
      </main>
    </div>
  );
}

export default React.memo(Feed);