import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InstagramPost = () => {
  // State management
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(1243);
  const [saved, setSaved] = useState(false);
  const [comment, setComment] = useState('');
  const [showDialog, setShowDialog] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const commentInputRef = useRef(null);

  // Sample data
  const post = {
    user: {
      username: 'traveler_jane',
      fullName: 'Jane Doe',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      isVerified: true
    },
    location: 'Eiffel Tower, Paris',
    images: [
      'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    ],
    caption: 'Golden hour in Paris ✨ The light was absolutely magical today! #paris #goldenhour #travel',
    timestamp: '2 HOURS AGO',
    comments: [
      { id: 1, username: 'traveler123', text: 'Beautiful shot! 😍', likes: 24, time: '1h ago', isLiked: false },
      { id: 2, username: 'photography_love', text: 'Amazing composition!', likes: 12, time: '45m ago', isLiked: true }
    ]
  };

  // Handlers
  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const handleDoubleClickLike = () => {
    if (!liked) {
      setLiked(true);
      setLikeCount(likeCount + 1);
    }
  };

  const handleSave = () => {
    setSaved(!saved);
    setShowDialog(false);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      // In a real app, you would add the comment to your state/backend
      setComment('');
      commentInputRef.current.blur();
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === post.images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? post.images.length - 1 : prev - 1));
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-lg mx-auto bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 mb-5"
    >
      {/* Post Header */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center space-x-3">
          <motion.div whileHover={{ scale: 1.05 }} className="relative">
            <img
              className="w-8 h-8 rounded-full border border-gray-200 object-cover"
              src={post.user.avatar}
              alt={`${post.user.username}'s profile`}
            />
            {post.user.isVerified && (
              <svg className="w-3 h-3 absolute -right-1 -bottom-1 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            )}
          </motion.div>
          <div>
            <div className="flex items-center">
              <p className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors cursor-pointer">
                {post.user.username}
              </p>
            </div>
            <p className="text-xs text-gray-500">{post.location}</p>
          </div>
        </div>
        <button 
          onClick={() => setShowDialog(true)}
          className="p-1 focus:outline-none"
          aria-label="More options"
        >
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
        </button>
      </div>

      {/* Post Image Carousel */}
      <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
        {/* Image slides */}
        <div className="relative h-full w-full">
          {post.images.map((image, index) => (
            <motion.div
              key={index}
              className={`absolute inset-0 w-full h-full ${index === currentSlide ? 'block' : 'hidden'}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentSlide ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                initial={{ scale: 1 }}
                whileTap={{ scale: 0.95 }}
                className="w-full h-full object-cover cursor-pointer select-none"
                src={image}
                alt={`Post by ${post.user.username}`}
                onDoubleClick={handleDoubleClickLike}
              />
            </motion.div>
          ))}
        </div>

        {/* Navigation arrows (only show if multiple images) */}
        {post.images.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full p-2 focus:outline-none"
              aria-label="Previous image"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full p-2 focus:outline-none"
              aria-label="Next image"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Image indicators */}
        {post.images.length > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2">
            {post.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full ${index === currentSlide ? 'bg-blue-500' : 'bg-white bg-opacity-60'}`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Like animation */}
        <AnimatePresence>
          {liked && (
            <motion.div
              key="like-animation"
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
        </AnimatePresence>
      </div>

      {/* Post Actions */}
      <div className="px-4 pt-3 pb-1">
        <div className="flex items-center justify-between">
          <div className="flex space-x-4">
            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={handleLike}
              className="focus:outline-none"
              aria-label={liked ? "Unlike" : "Like"}
            >
              <svg className="w-6 h-6" fill={liked ? "red" : "none"} stroke={liked ? "red" : "currentColor"} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={liked ? "2" : "1.5"} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </motion.button>
            
            <motion.button 
              whileTap={{ scale: 0.9 }}
              className="focus:outline-none"
              aria-label="Comment"
              onClick={() => commentInputRef.current.focus()}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </motion.button>
            
            <motion.button 
              whileTap={{ scale: 0.9 }}
              className="focus:outline-none"
              aria-label="Share"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </motion.button>
          </div>
          
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={handleSave}
            className="focus:outline-none"
            aria-label={saved ? "Remove from saved" : "Save"}
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
          <span className="font-semibold text-gray-900 hover:text-gray-600 transition-colors cursor-pointer">
            {post.user.username}
          </span>
          <span className="text-gray-800 ml-1">{post.caption}</span>
        </p>
      </div>

      {/* Comments Preview */}
      <div className="px-4 py-1">
        {post.comments.length > 0 && (
          <>
            <button 
              onClick={() => setShowComments(!showComments)}
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              {showComments ? 'Hide comments' : `View all ${post.comments.length} comments`}
            </button>
            
            {showComments && (
              <div className="mt-2 space-y-2">
                {post.comments.map(comment => (
                  <div key={comment.id} className="flex items-start">
                    <span className="font-semibold text-gray-900 hover:text-gray-600 transition-colors cursor-pointer text-sm">
                      {comment.username}
                    </span>
                    <span className="text-gray-800 ml-1 text-sm flex-1">{comment.text}</span>
                    <button className="ml-2 text-gray-400 hover:text-gray-600">
                      <svg className="w-4 h-4" fill={comment.isLiked ? "red" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* Timestamp */}
      <div className="px-4 py-2">
        <p className="text-xs text-gray-400 hover:text-gray-500 transition-colors cursor-pointer uppercase">
          {post.timestamp}
        </p>
      </div>

      {/* Add Comment */}
      <form onSubmit={handleCommentSubmit} className="px-4 py-3 border-t border-gray-100 flex items-center">
        <button 
          type="button"
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          className="p-1 focus:outline-none mr-2"
          aria-label="Emoji picker"
        >
          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
        
        <input
          ref={commentInputRef}
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment..."
          className="flex-1 text-sm border-none focus:ring-0 placeholder-gray-400 focus:placeholder-gray-300 transition-all"
        />
        
        <motion.button 
          type="submit"
          whileTap={{ scale: 0.95 }}
          className={`text-sm font-semibold ml-2 ${comment ? 'text-blue-500' : 'text-blue-300'} transition-colors`}
          disabled={!comment.trim()}
        >
          Post
        </motion.button>
      </form>

      {/* Emoji Picker (would be implemented with a library in a real app) */}
      <AnimatePresence>
        {showEmojiPicker && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="px-4 pb-3"
          >
            <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
              <p className="text-xs text-gray-500 mb-2">Select emoji</p>
              <div className="grid grid-cols-8 gap-1">
                {['😀', '😂', '😍', '🥰', '😎', '🤩', '👍', '❤️'].map(emoji => (
                  <button
                    key={emoji}
                    onClick={() => {
                      setComment(prev => prev + emoji);
                      setShowEmojiPicker(false);
                    }}
                    className="text-xl p-1 hover:bg-gray-100 rounded"
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Options Dialog */}
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
                className="w-full py-4 px-5 text-center text-red-500 font-semibold border-b border-gray-200 hover:bg-gray-50 transition-colors"
                onClick={() => {
                  console.log('Unfollowed user');
                  setShowDialog(false);
                }}
              >
                Unfollow
              </button>
              <button 
                className="w-full py-4 px-5 text-center text-gray-800 font-semibold border-b border-gray-200 hover:bg-gray-50 transition-colors"
                onClick={() => {
                  // In a real app, this would report the post
                  console.log('Post reported');
                  setShowDialog(false);
                }}
              >
                Report
              </button>
              <button 
                className="w-full py-4 px-5 text-center text-gray-800 font-semibold border-b border-gray-200 hover:bg-gray-50 transition-colors"
                onClick={handleSave}
              >
                {saved ? 'Remove from Saved' : 'Add to Saved'}
              </button>
              <button 
                className="w-full py-4 px-5 text-center text-gray-800 font-semibold hover:bg-gray-50 transition-colors"
                onClick={() => setShowDialog(false)}
              >
                Cancel
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default InstagramPost;