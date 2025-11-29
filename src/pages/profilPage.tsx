import { 
  User, 
  Mail, 
  Calendar, 
  Edit2, 
  Bell, 
  Moon, 
  Lock, 
  LogOut,
  Clock,
  Target,
  Zap,
  TrendingUp
} from 'lucide-react';
import { useState } from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

interface ProfilePageProps {
  totalFocusTime: number;
  completedTasks: number;
}


export default function ProfilePage({ totalFocusTime, completedTasks }: ProfilePageProps) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(true);

  // Mock user data
  const userData = {
    name: 'Alex Johnson',
    email: 'alex.johnson@pomodoro.app',
    username: '@alexj',
    bio: 'Focused on building great things, one Pomodoro at a time.',
    joinedDate: 'January 2024',
    avatar: 'AJ'
  };

  // Mock productivity data for mini chart
  const weeklyProductivity = [
    { day: 1, value: 80 },
    { day: 2, value: 100 },
    { day: 3, value: 60 },
    { day: 4, value: 120 },
    { day: 5, value: 95 },
    { day: 6, value: 110 },
    { day: 7, value: 105 }
  ];

  const currentStreak = 7;

  return (
    <>
     <div className="container mx-auto px-4 py-8 max-w-5xl animate-fade-in-up">
      {/* Profile Card */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4DC3FF]/20 to-[#A470FF]/20 rounded-3xl blur-3xl" />
        <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Avatar */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4DC3FF] to-[#A470FF] rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-32 h-32 bg-gradient-to-br from-[#4DC3FF] to-[#A470FF] rounded-full flex items-center justify-center border-4 border-white/20">
                <span className="text-4xl text-white">{userData.avatar}</span>
              </div>
            </div>

            {/* User Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl text-white mb-2">{userData.name}</h1>
              <p className="text-[#4DC3FF] mb-2">{userData.username}</p>
              <p className="text-white/60 mb-4 max-w-md">{userData.bio}</p>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-white/50">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>{userData.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Joined {userData.joinedDate}</span>
                </div>
              </div>
            </div>

            {/* Edit Button */}
            <button className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#4DC3FF] to-[#A470FF] rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="relative px-6 py-3 bg-gradient-to-r from-[#4DC3FF] to-[#A470FF] rounded-2xl flex items-center gap-2">
                <Edit2 className="w-4 h-4 text-white" />
                <span className="text-white">Edit Profile</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Personal Information */}
        <div className="relative">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-[#4DC3FF]/20 to-[#A470FF]/20 rounded-xl border border-[#4DC3FF]/30">
                <User className="w-5 h-5 text-[#4DC3FF]" />
              </div>
              <h2 className="text-xl text-white">Personal Information</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl hover:border-[#4DC3FF]/30 transition-colors">
                <div>
                  <p className="text-sm text-white/50 mb-1">Full Name</p>
                  <p className="text-white">{userData.name}</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl hover:border-[#4DC3FF]/30 transition-colors">
                <div>
                  <p className="text-sm text-white/50 mb-1">Email Address</p>
                  <p className="text-white">{userData.email}</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl hover:border-[#4DC3FF]/30 transition-colors">
                <div>
                  <p className="text-sm text-white/50 mb-1">Username</p>
                  <p className="text-white">{userData.username}</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl hover:border-[#4DC3FF]/30 transition-colors">
                <div>
                  <p className="text-sm text-white/50 mb-1">Member Since</p>
                  <p className="text-white">{userData.joinedDate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Productivity Stats */}
        <div className="relative">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-[#4DC3FF]/20 to-[#A470FF]/20 rounded-xl border border-[#A470FF]/30">
                <TrendingUp className="w-5 h-5 text-[#A470FF]" />
              </div>
              <h2 className="text-xl text-white">Productivity Stats</h2>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-[#4DC3FF]/10 to-[#A470FF]/10 border border-[#4DC3FF]/30 rounded-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-[#4DC3FF]" />
                  <span className="text-xs text-white/60">Focus Time</span>
                </div>
                <p className="text-2xl text-white">{(totalFocusTime / 60).toFixed(1)}h</p>
              </div>

              <div className="p-4 bg-gradient-to-br from-[#4DC3FF]/10 to-[#A470FF]/10 border border-[#A470FF]/30 rounded-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-[#A470FF]" />
                  <span className="text-xs text-white/60">Tasks Done</span>
                </div>
                <p className="text-2xl text-white">{completedTasks}</p>
              </div>

              <div className="p-4 bg-gradient-to-br from-[#4DC3FF]/10 to-[#A470FF]/10 border border-[#4DC3FF]/30 rounded-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-[#4DC3FF]" />
                  <span className="text-xs text-white/60">Current Streak</span>
                </div>
                <p className="text-2xl text-white">{currentStreak} days</p>
              </div>

              <div className="p-4 bg-gradient-to-br from-[#4DC3FF]/10 to-[#A470FF]/10 border border-[#A470FF]/30 rounded-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-[#A470FF]" />
                  <span className="text-xs text-white/60">Avg/Day</span>
                </div>
                <p className="text-2xl text-white">98 min</p>
              </div>
            </div>

            {/* Mini Chart */}
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
              <p className="text-sm text-white/60 mb-3">Last 7 Days Activity</p>
              <ResponsiveContainer width="100%" height={80}>
                <LineChart data={weeklyProductivity}>
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#4DC3FF" 
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Panel */}
      <div className="relative mt-6">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gradient-to-br from-[#4DC3FF]/20 to-[#A470FF]/20 rounded-xl border border-[#4DC3FF]/30">
              <User className="w-5 h-5 text-[#4DC3FF]" />
            </div>
            <h2 className="text-xl text-white">Settings</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Preferences */}
            <div className="space-y-4">
              <h3 className="text-sm text-white/60 mb-3">Preferences</h3>
              
              {/* Notifications Toggle */}
              <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl hover:border-[#4DC3FF]/30 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#4DC3FF]/10 rounded-lg">
                    <Bell className="w-4 h-4 text-[#4DC3FF]" />
                  </div>
                  <div>
                    <p className="text-white">Notifications</p>
                    <p className="text-xs text-white/50">Get productivity reminders</p>
                  </div>
                </div>
                <button
                  onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                  className={`relative w-12 h-6 rounded-full transition-colors ${
                    notificationsEnabled 
                      ? 'bg-gradient-to-r from-[#4DC3FF] to-[#A470FF]' 
                      : 'bg-white/20'
                  }`}
                >
                  <div
                    className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                      notificationsEnabled ? 'translate-x-6' : ''
                    }`}
                  />
                </button>
              </div>

              {/* Dark Mode Toggle */}
              <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl hover:border-[#4DC3FF]/30 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#A470FF]/10 rounded-lg">
                    <Moon className="w-4 h-4 text-[#A470FF]" />
                  </div>
                  <div>
                    <p className="text-white">Dark Mode</p>
                    <p className="text-xs text-white/50">Always on for your eyes</p>
                  </div>
                </div>
                <button
                  onClick={() => setDarkModeEnabled(!darkModeEnabled)}
                  className={`relative w-12 h-6 rounded-full transition-colors ${
                    darkModeEnabled 
                      ? 'bg-gradient-to-r from-[#4DC3FF] to-[#A470FF]' 
                      : 'bg-white/20'
                  }`}
                >
                  <div
                    className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                      darkModeEnabled ? 'translate-x-6' : ''
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <h3 className="text-sm text-white/60 mb-3">Account Actions</h3>
              
              {/* Change Password */}
              <button className="w-full group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#4DC3FF]/20 to-[#A470FF]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:border-[#4DC3FF]/30 transition-colors">
                  <div className="p-2 bg-[#4DC3FF]/10 rounded-lg">
                    <Lock className="w-4 h-4 text-[#4DC3FF]" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-white">Change Password</p>
                    <p className="text-xs text-white/50">Update your password</p>
                  </div>
                </div>
              </button>

              {/* Logout */}
              <button className="w-full group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:border-red-500/30 transition-colors">
                  <div className="p-2 bg-red-500/10 rounded-lg">
                    <LogOut className="w-4 h-4 text-red-400" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-white">Logout</p>
                    <p className="text-xs text-white/50">Sign out of your account</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

