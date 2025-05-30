import React, { useState, useRef, useEffect } from "react"
import { Heart, MessageCircle, Share2, MoreHorizontal, Bookmark, X, Flag, UserPlus, EyeOff } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Post({ post }) {
  const [isLiked, setIsLiked] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const [likesCount, setLikesCount] = useState(post.likes)
  const [showOptions, setShowOptions] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const optionsRef = useRef(null)

  // Handle click outside options menu
  useEffect(() => {
    function handleClickOutside(event) {
      if (optionsRef.current && !optionsRef.current.contains(event.target)) {
        setShowOptions(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1)
  }

  const doubleClickLike = () => {
    if (!isLiked) {
      setIsLiked(true)
      setLikesCount(likesCount + 1)
    }
  }

  const options = [
    { icon: UserPlus, label: `Follow ${post.user.name}`, action: () => console.log("Follow") },
    { icon: EyeOff, label: "Hide this post", action: () => console.log("Hide") },
    { icon: Flag, label: "Report post", action: () => console.log("Report") },
    { icon: X, label: "Close", action: () => setShowOptions(false) }
  ]

  return (
    <motion.div 
      className="bg-white border border-gray-100 rounded-xl shadow-sm p-4 w-full max-w-xl mx-auto hover:shadow-md transition-shadow duration-200"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      onDoubleClick={doubleClickLike}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Post Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="h-10 w-10 rounded-full overflow-hidden bg-gradient-to-r from-purple-100 to-blue-100">
              <img
                src={post.user.avatar || "/placeholder.svg"}
                alt={post.user.name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            {isHovering && (
              <motion.div 
                className="absolute inset-0 bg-black bg-opacity-30 rounded-full flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Heart 
                  className={`h-5 w-5 text-white ${isLiked ? "fill-current" : ""}`}
                />
              </motion.div>
            )}
          </div>
          <div>
            <p className="font-semibold text-sm hover:underline cursor-pointer">{post.user.name}</p>
            <p className="text-gray-500 text-xs">@{post.user.username} • {post.timestamp}</p>
          </div>
        </div>

        <div className="relative" ref={optionsRef}>
          <button 
            onClick={() => setShowOptions(!showOptions)}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Post options"
          >
            <MoreHorizontal className="h-5 w-5 text-gray-500" />
          </button>

          <AnimatePresence>
            {showOptions && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10 overflow-hidden"
              >
                {options.map((option, index) => (
                  <button
                    key={index}
                    onClick={option.action}
                    className="w-full px-4 py-3 text-left text-sm hover:bg-gray-50 flex items-center space-x-2 transition-colors"
                  >
                    <option.icon className="h-4 w-4" />
                    <span>{option.label}</span>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Post Content */}
      <div className="mb-3">
        <p className="text-gray-800 leading-relaxed whitespace-pre-line">{post.content}</p>
      </div>

      {/* Post Image */}
      {post.image && (
        <div className="mb-3 rounded-lg overflow-hidden border border-gray-100 relative">
          <img 
            src={post.image} 
            alt="Post visual" 
            className="w-full h-auto max-h-96 object-cover cursor-pointer"
            loading="lazy"
          />
          <AnimatePresence>
            {isLiked && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1.5, opacity: 0.8 }}
                exit={{ scale: 2, opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Heart className="h-20 w-20 text-red-500 fill-current" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Post Stats */}
      <div className="flex items-center justify-between text-xs text-gray-500 mb-2 px-1">
        <span>{likesCount} likes</span>
        <div className="flex space-x-3">
          <span>{post.comments} comments</span>
          <span>{post.shares} shares</span>
        </div>
      </div>

      {/* Post Actions */}
      <div className="flex items-center justify-between pt-3 border-t">
        <div className="flex items-center space-x-4">
          <button
            onClick={handleLike}
            className={`flex items-center space-x-1 text-sm transition-all ${
              isLiked ? "text-red-500 hover:text-red-600" : "text-gray-500 hover:text-red-500"
            }`}
            aria-label={isLiked ? "Unlike post" : "Like post"}
          >
            <motion.div
              animate={isLiked ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.3 }}
            >
              <Heart className={`h-5 w-5 ${isLiked ? "fill-current" : ""}`} />
            </motion.div>
            <span>Like</span>
          </button>

          <button 
            className="flex items-center space-x-1 text-sm text-gray-500 hover:text-blue-500 transition-colors"
            aria-label="Comment"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Comment</span>
          </button>

          <button 
            className="flex items-center space-x-1 text-sm text-gray-500 hover:text-green-500 transition-colors"
            aria-label="Share"
          >
            <Share2 className="h-5 w-5" />
            <span>Share</span>
          </button>
        </div>

        <button
          onClick={() => setIsSaved(!isSaved)}
          className={`text-sm transition-colors ${
            isSaved ? "text-purple-500 hover:text-purple-600" : "text-gray-500 hover:text-purple-500"
          }`}
          aria-label={isSaved ? "Unsave post" : "Save post"}
        >
          <motion.div
            animate={isSaved ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.3 }}
          >
            <Bookmark className={`h-5 w-5 ${isSaved ? "fill-current" : ""}`} />
          </motion.div>
        </button>
      </div>
    </motion.div>
  )
}