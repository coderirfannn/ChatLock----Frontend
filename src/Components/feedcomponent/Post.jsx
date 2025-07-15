import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function InstagramPost() {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(1234);
  const [saved, setSaved] = useState(false);
  const [comment, setComment] = useState('');
  const [showDialog, setShowDialog] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const handleSave = () => {
    setSaved(!saved);
    setShowDialog(false);
  };

  const handleUnfollow = () => {
    // In a real app, you would handle unfollow logic here
    console.log('Unfollowed user');
    setShowDialog(false);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-md mx-auto bg-white rounded-xl shadow-sm overflow-hidden md:max-w-2xl border border-gray-100 relative"
    >
      {/* Post Header */}
      <div className="flex items-center p-3">
        <motion.div whileHover={{ scale: 1.05 }} className="relative">
          <img
            className="w-9 h-9 rounded-full border border-gray-200 object-cover"
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Profile"
          />
        </motion.div>
        <div className="ml-3 flex-1">
          <p className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors cursor-pointer">jane_doe</p>
          <p className="text-xs text-gray-500">Paris, France</p>
        </div>
        <button 
          onClick={() => setShowDialog(true)}
          className="p-1 focus:outline-none"
        >
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
        </button>
      </div>

      {/* Post Image */}
      <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
        <motion.img
          initial={{ scale: 1 }}
          whileTap={{ scale: 0.95 }}
          className="w-full h-full object-cover cursor-pointer"
          src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
          alt="Post content"
          onDoubleClick={handleLike}
        />
        {liked && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [1.5, 1], opacity: [0.8, 0] }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <svg className="w-24 h-24 text-red-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </motion.div>
        )}
      </div>

      {/* Post Actions */}
      <div className="px-4 pt-3 pb-1">
        <div className="flex space-x-5">
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={handleLike}
            className="focus:outline-none"
          >
            <svg className="w-6 h-6" fill={liked ? "red" : "none"} stroke={liked ? "red" : "currentColor"} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={liked ? "2" : "1.5"} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </motion.button>
          
          <motion.button whileTap={{ scale: 0.9 }} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </motion.button>
          
          <motion.button whileTap={{ scale: 0.9 }} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </motion.button>
          
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={handleSave}
            className="ml-auto focus:outline-none"
          >
            <svg className="w-6 h-6" fill={saved ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={saved ? "0" : "1.5"} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Likes */}
      <div className="px-4 py-1">
        <p className="text-sm font-semibold text-gray-900">
          {likeCount.toLocaleString()} likes
        </p>
      </div>

      {/* Caption */}
      <div className="px-4 py-1">
        <p className="text-sm">
          <span className="font-semibold text-gray-900 hover:text-gray-600 transition-colors cursor-pointer">jane_doe</span>
          <span className="text-gray-800 ml-1">Golden hour in Paris ✨ The light was absolutely magical today! #paris #goldenhour #travel</span>
        </p>
      </div>

      {/* Comments */}
      <div className="px-4 py-1">
        <button className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
          View all 42 comments
        </button>
        <div className="mt-1">
          <p className="text-sm">
            <span className="font-semibold text-gray-900 hover:text-gray-600 transition-colors cursor-pointer">traveler123</span>
            <span className="text-gray-800 ml-1">Beautiful shot! 😍</span>
          </p>
        </div>
      </div>

      {/* Timestamp */}
      <div className="px-4 py-2">
        <p className="text-xs text-gray-400 hover:text-gray-500 transition-colors cursor-pointer">
          2 HOURS AGO
        </p>
      </div>

      {/* Add Comment */}
      <div className="px-4 py-3 border-t border-gray-100">
        <div className="flex items-center">
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            className="flex-1 text-sm border-none focus:ring-0 placeholder-gray-400 focus:placeholder-gray-300 transition-all"
          />
          <motion.button 
            whileTap={{ scale: 0.95 }}
            className={`text-sm font-semibold ${comment ? 'text-blue-500' : 'text-blue-300'} transition-colors`}
            disabled={!comment}
          >
            Post
          </motion.button>
        </div>
      </div>

      {/* Dialog */}
      <AnimatePresence>
        {showDialog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50"
            onClick={() => setShowDialog(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-lg w-full max-w-xs overflow-hidden shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={handleUnfollow}
                className="w-full py-4 px-5 text-center text-red-500 font-semibold border-b border-gray-200 hover:bg-gray-50 transition-colors"
              >
                Unfollow
              </button>
              <button 
                onClick={handleSave}
                className="w-full py-4 px-5 text-center text-gray-800 font-semibold border-b border-gray-200 hover:bg-gray-50 transition-colors"
              >
                {saved ? 'Remove from Favorites' : 'Add to Favorites'}
              </button>
              <button 
                onClick={() => setShowDialog(false)}
                className="w-full py-4 px-5 text-center text-gray-800 font-semibold hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default InstagramPost;