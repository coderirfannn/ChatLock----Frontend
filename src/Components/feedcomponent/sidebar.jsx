import { useState, useEffect } from "react";
import { Users, Plus, TrendingUp, ChevronDown, Check } from "lucide-react";

const suggestedUsers = [
  {
    name: "Jessica Brown",
    username: "@jessicab",
    avatar: "/placeholder.svg",
    mutualFriends: 12,
  },
  {
    name: "Michael Davis",
    username: "@michaeld",
    avatar: "/placeholder.svg",
    mutualFriends: 8,
  },
  {
    name: "Lisa Zhang",
    username: "@lisaz",
    avatar: "/placeholder.svg",
    mutualFriends: 15,
  },
];

const trendingTopics = [
  { tag: "#TechNews", posts: "2.1k posts", trend: "up" },
  { tag: "#Photography", posts: "1.8k posts", trend: "up" },
  { tag: "#Travel", posts: "1.5k posts", trend: "same" },
  { tag: "#Fitness", posts: "1.2k posts", trend: "down" },
  { tag: "#Cooking", posts: "980 posts", trend: "up" },
];

export function Sidebar() {
  const [follows, setFollows] = useState(
    suggestedUsers.reduce((acc, user) => {
      acc[user.username] = false;
      return acc;
    }, {})
  );
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleFollow = (username) => {
    setFollows((prev) => ({ ...prev, [username]: !prev[username] }));
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`w-full md:w-80 space-y-6 font-sans transition-all duration-300 ${isCollapsed && isMobile ? 'hidden' : ''}`}>
      {/* Collapse button for mobile */}
      {isMobile && (
        <button
          onClick={toggleCollapse}
          className="w-full flex items-center justify-center p-2 bg-white rounded-lg shadow-sm border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
        >
          <ChevronDown className={`h-4 w-4 mr-2 transition-transform ${isCollapsed ? 'rotate-180' : ''}`} />
          {isCollapsed ? 'Show sidebar' : 'Hide sidebar'}
        </button>
      )}

      {/* Suggested Connections */}
      <div className="border rounded-lg shadow-sm bg-white overflow-hidden">
        <div className="flex items-center p-4 border-b">
          <Users className="h-5 w-5 mr-2 text-purple-600" />
          <h2 className="text-lg font-semibold">Suggested for you</h2>
        </div>
        <div className="space-y-3 p-4">
          {suggestedUsers.map((user) => (
            <div
              key={user.username}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-all duration-200"
            >
              <div className="flex items-center space-x-3">
                {/* Avatar with fallback */}
                <div className="relative">
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="h-10 w-10 rounded-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 flex items-center justify-center text-sm font-semibold uppercase text-purple-600">
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </div>
                  )}
                  {follows[user.username] && (
                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
                      <Check className="h-3 w-3 text-purple-600" />
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 truncate max-w-[120px]">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.mutualFriends} mutual friends</p>
                </div>
              </div>
              <button
                onClick={() => toggleFollow(user.username)}
                className={`inline-flex items-center px-3 py-1.5 border rounded-full text-sm font-medium transition-all duration-200
                  ${
                    follows[user.username]
                      ? "bg-purple-600 border-purple-600 text-white hover:bg-purple-700 shadow-sm"
                      : "border-purple-600 text-purple-600 hover:bg-purple-50 hover:shadow-sm"
                  }
                `}
                aria-label={follows[user.username] ? `Unfollow ${user.name}` : `Follow ${user.name}`}
              >
                {follows[user.username] ? (
                  "Following"
                ) : (
                  <>
                    <Plus className="h-3 w-3 mr-1" />
                    Follow
                  </>
                )}
              </button>
            </div>
          ))}
          <button className="w-full text-purple-600 hover:text-purple-700 hover:underline text-sm font-semibold transition-colors">
            See all suggestions
          </button>
        </div>
      </div>

      {/* Trending Topics */}
      <div className="border rounded-lg shadow-sm bg-white overflow-hidden">
        <div className="flex items-center p-4 border-b">
          <TrendingUp className="h-5 w-5 mr-2 text-purple-600" />
          <h2 className="text-lg font-semibold">Trending Now</h2>
        </div>
        <div className="space-y-3 p-4">
          {trendingTopics.map((topic, index) => (
            <div
              key={topic.tag}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors duration-200 group"
            >
              <div>
                <p className="font-medium text-sm text-gray-900 group-hover:text-purple-600 transition-colors">
                  {topic.tag}
                </p>
                <p className="text-xs text-gray-500">{topic.posts}</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`inline-flex items-center justify-center h-5 w-5 rounded-full text-xs font-semibold
                  ${index < 3 ? "bg-purple-100 text-purple-600" : "bg-gray-100 text-gray-600"}
                `}>
                  {index + 1}
                </span>
                {topic.trend === "up" && (
                  <span className="text-green-500 text-xs">
                    ↑
                  </span>
                )}
                {topic.trend === "down" && (
                  <span className="text-red-500 text-xs">
                    ↓
                  </span>
                )}
              </div>
            </div>
          ))}
          <button className="w-full text-purple-600 hover:text-purple-700 hover:underline text-sm font-semibold transition-colors">
            Show more trends
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="border rounded-lg shadow-sm bg-white p-6 text-center space-y-2">
        <p className="text-3xl font-bold text-purple-600 animate-pulse">1,247</p>
        <p className="text-sm text-gray-500">Total Connections</p>
        <div className="flex justify-center space-x-4 text-xs text-gray-500 pt-2">
          <span className="flex items-center text-green-500">
            <TrendingUp className="h-3 w-3 mr-1" />
            +12 this week
          </span>
          <span>•</span>
          <span className="text-purple-500">89% active</span>
        </div>
      </div>
    </div>
  );
}