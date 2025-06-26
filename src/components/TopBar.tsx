
import React, { useState } from 'react';
import { Bell, Search, Moon, Sun, Settings } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

export const TopBar: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    { id: 1, message: "New lead from website contact form", time: "2 min ago", unread: true },
    { id: 2, message: "Deal 'Acme Corp' moved to negotiation", time: "15 min ago", unread: true },
    { id: 3, message: "Follow-up call scheduled for tomorrow", time: "1 hour ago", unread: false },
  ];

  return (
    <div className="bg-white/20 dark:bg-slate-800/20 backdrop-blur-xl border-b border-white/20 dark:border-slate-700/30 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 flex-1">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search contacts, deals, or activities..."
              className="w-full pl-10 pr-4 py-2 bg-white/50 dark:bg-slate-700/50 border border-white/30 dark:border-slate-600/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent backdrop-blur-sm transition-all duration-200"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-white/20 dark:bg-slate-700/50 hover:bg-white/30 dark:hover:bg-slate-600/50 transition-all duration-200 group"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-slate-600 dark:text-slate-300 group-hover:text-amber-500 transition-colors duration-200" />
            ) : (
              <Moon className="w-5 h-5 text-slate-600 group-hover:text-indigo-500 transition-colors duration-200" />
            )}
          </button>
          
          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 rounded-xl bg-white/20 dark:bg-slate-700/50 hover:bg-white/30 dark:hover:bg-slate-600/50 transition-all duration-200 group relative"
            >
              <Bell className="w-5 h-5 text-slate-600 dark:text-slate-300 group-hover:text-blue-500 transition-colors duration-200" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
            </button>
            
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-xl shadow-xl border border-white/20 dark:border-slate-700/50 z-50 animate-scale-in">
                <div className="p-4 border-b border-white/20 dark:border-slate-700/50">
                  <h3 className="font-semibold text-slate-800 dark:text-white">Notifications</h3>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={cn(
                        "p-4 border-b border-white/10 dark:border-slate-700/30 last:border-b-0 hover:bg-white/20 dark:hover:bg-slate-700/20 transition-colors duration-200",
                        notification.unread && "bg-blue-50/50 dark:bg-blue-900/10"
                      )}
                    >
                      <p className="text-sm text-slate-700 dark:text-slate-300">{notification.message}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{notification.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Settings */}
          <button className="p-2 rounded-xl bg-white/20 dark:bg-slate-700/50 hover:bg-white/30 dark:hover:bg-slate-600/50 transition-all duration-200 group">
            <Settings className="w-5 h-5 text-slate-600 dark:text-slate-300 group-hover:text-blue-500 transition-colors duration-200" />
          </button>
          
          {/* User Avatar */}
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-lg">
            JD
          </div>
        </div>
      </div>
    </div>
  );
};
