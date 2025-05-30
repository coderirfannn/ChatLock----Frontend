import React, { useState } from 'react';
import { Post } from './Post';
import { Heart, MessageCircle, Repeat, Share2, Bookmark, MoreHorizontal } from 'lucide-react';

const mockPosts = [
    {
        id: "1",
        user: {
            name: "Sarah Johnson",
            username: "@sarahj",
            avatar: "/placeholder.svg?height=40&width=40",
        },
        content:
            "Just finished an amazing hike in the mountains! The view was absolutely breathtaking. Nature has a way of putting everything into perspective. 🏔️ #hiking #nature #mindfulness",
        timestamp: "2 hours ago",
        likes: 24,
        comments: 8,
        shares: 3,
        image: "/placeholder.svg?height=300&width=500",
    },
    {
        id: "2",
        user: {
            name: "Alex Chen",
            username: "@alexc",
            avatar: "/placeholder.svg?height=40&width=40",
        },
        content:
            "Excited to share that I just launched my new project! It's been months of hard work, but seeing it come to life is incredibly rewarding. Thank you to everyone who supported me along the way! 🚀",
        timestamp: "4 hours ago",
        likes: 156,
        comments: 23,
        shares: 12,
    },
    {
        id: "3",
        user: {
            name: "Maya Patel",
            username: "@mayap",
            avatar: "/placeholder.svg?height=40&width=40",
        },
        content:
            "Coffee shop vibes today ☕ Working on some new designs and feeling inspired by all the creative energy around me. Sometimes a change of scenery is all you need!",
        timestamp: "6 hours ago",
        likes: 89,
        comments: 15,
        shares: 7,
        image: "/placeholder.svg?height=300&width=500",
    },
    {
        id: "4",
        user: {
            name: "David Kim",
            username: "@davidk",
            avatar: "/placeholder.svg?height=40&width=40",
        },
        content:
            "Reading an incredible book about the future of technology. It's fascinating how rapidly things are changing. What books have inspired you lately? Drop your recommendations below! 📚",
        timestamp: "8 hours ago",
        likes: 67,
        comments: 31,
        shares: 9,
    },
    {
        id: "5",
        user: {
            name: "Emma Wilson",
            username: "@emmaw",
            avatar: "/placeholder.svg?height=40&width=40",
        },
        content:
            "Grateful for the small moments today. Had lunch with an old friend and realized how important it is to maintain connections. Life gets busy, but relationships are what truly matter. 💝",
        timestamp: "12 hours ago",
        likes: 203,
        comments: 45,
        shares: 18,
    },
]
function PostList() {
  const [activePost, setActivePost] = useState(null);

  const handleInteraction = (postId, action) => {
    // In a real app, this would update the backend
    console.log(`${action} post ${postId}`);
    if (action === 'like') {
      setActivePost(activePost === postId ? null : postId);
    }
  };

  return (
    <div className="space-y-5">
      {mockPosts.map((post) => (
        <div 
          key={post.id}
          className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-200 hover:shadow-md"
        >
          {/* Post Header */}
          <div className="flex items-center p-4">
            {post.user.avatar ? (
              <img
                src={post.user.avatar}
                alt={post.user.name}
                className="h-10 w-10 rounded-full object-cover mr-3"
                loading="lazy"
              />
            ) : (
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-medium text-sm mr-3">
                {post.user.name.split(' ').map(n => n[0]).join('')}
              </div>
            )}
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-gray-900 truncate">{post.user.name}</h3>
              <p className="text-xs text-gray-500 truncate">{post.user.username} • {post.timestamp}</p>
            </div>
            <button className="text-gray-400 hover:text-gray-600 p-1 rounded-full">
              <MoreHorizontal className="h-5 w-5" />
            </button>
          </div>

          {/* Post Content */}
          <div className="px-4 pb-3">
            <p className="text-gray-800 mb-3">{post.content}</p>
            {post.image && (
              <div className="rounded-lg overflow-hidden mb-3 border border-gray-100">
                <img
                  src={post.image}
                  alt="Post content"
                  className="w-full h-auto max-h-96 object-cover"
                  loading="lazy"
                />
              </div>
            )}
          </div>

          {/* Post Stats */}
          <div className="px-4 pb-2 flex text-xs text-gray-500 space-x-4">
            <span>{post.likes} likes</span>
            <span>{post.comments} comments</span>
            <span>{post.shares} shares</span>
          </div>

          {/* Post Actions */}
          <div className="px-2 py-2 border-t border-gray-100 flex justify-between">
            <button
              onClick={() => handleInteraction(post.id, 'like')}
              className={`flex items-center justify-center p-2 rounded-lg flex-1 mx-1 transition-colors ${activePost === post.id ? 'text-red-500 hover:bg-red-50' : 'text-gray-500 hover:bg-gray-50'}`}
              aria-label="Like"
            >
              <Heart className={`h-5 w-5 ${activePost === post.id ? 'fill-current' : ''}`} />
              <span className="ml-2 text-sm">Like</span>
            </button>
            <button
              onClick={() => handleInteraction(post.id, 'comment')}
              className="flex items-center justify-center p-2 rounded-lg flex-1 mx-1 text-gray-500 hover:bg-gray-50 transition-colors"
              aria-label="Comment"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="ml-2 text-sm">Comment</span>
            </button>
            <button
              onClick={() => handleInteraction(post.id, 'share')}
              className="flex items-center justify-center p-2 rounded-lg flex-1 mx-1 text-gray-500 hover:bg-gray-50 transition-colors"
              aria-label="Share"
            >
              <Repeat className="h-5 w-5" />
              <span className="ml-2 text-sm">Share</span>
            </button>
            <button
              onClick={() => handleInteraction(post.id, 'save')}
              className="flex items-center justify-center p-2 rounded-lg flex-1 mx-1 text-gray-500 hover:bg-gray-50 transition-colors"
              aria-label="Save"
            >
              <Bookmark className="h-5 w-5" />
              <span className="ml-2 text-sm">Save</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default React.memo(PostList);