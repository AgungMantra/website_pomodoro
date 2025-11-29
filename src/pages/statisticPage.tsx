import React from "react";
import { SidePanel } from "../components/sidePanel";
import { Task } from "../App";
import { TrendingUp, Target, Zap, Award, Calendar, Clock } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

export default function StatisticsPage({
  tasks = [],
  totalFocusTime = 0,
}: StatisticsPageProps) {
  // Calculate statistics
  const completedTasks = tasks.filter((t) => t.status === "completed").length;
  const totalTasks = tasks.length;
  const completionRate =
    totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  const longestStreak = 7; // Mock data
  const todayFocusTime = 125; // Mock data

  // Weekly data for charts
  const weeklyData = [
    { day: "Mon", minutes: 100, tasks: 4 },
    { day: "Tue", minutes: 125, tasks: 5 },
    { day: "Wed", minutes: 75, tasks: 3 },
    { day: "Thu", minutes: 150, tasks: 6 },
    { day: "Fri", minutes: 125, tasks: 5 },
    { day: "Sat", minutes: 50, tasks: 2 },
    { day: "Sun", minutes: 25, tasks: 1 },
  ];

  const monthlyData = [
    { week: "Week 1", hours: 8.5 },
    { week: "Week 2", hours: 10.2 },
    { week: "Week 3", hours: 9.8 },
    { week: "Week 4", hours: 11.5 },
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl text-white mb-2 flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-[#4DC3FF]/20 to-[#A470FF]/20 rounded-xl border border-[#4DC3FF]/30">
              <TrendingUp className="w-6 h-6 text-[#4DC3FF]" />
            </div>
            Your Statistics
          </h1>
          <p className="text-white/60">
            Track your productivity and celebrate your progress
          </p>
        </div>

        {/* Top Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Today's Focus Time */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4DC3FF] to-[#A470FF] rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-gradient-to-br from-[#4DC3FF]/20 to-[#A470FF]/20 rounded-2xl border border-[#4DC3FF]/30">
                  <Clock className="w-6 h-6 text-[#4DC3FF]" />
                </div>
              </div>
              <div className="text-3xl text-white mb-1">
                {todayFocusTime} min
              </div>
              <div className="text-sm text-white/60">Today's Focus Time</div>
            </div>
          </div>

          {/* Completed Tasks */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4DC3FF] to-[#A470FF] rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-gradient-to-br from-[#4DC3FF]/20 to-[#A470FF]/20 rounded-2xl border border-[#A470FF]/30">
                  <Target className="w-6 h-6 text-[#A470FF]" />
                </div>
              </div>
              <div className="text-3xl text-white mb-1">{completedTasks}</div>
              <div className="text-sm text-white/60">Completed Tasks</div>
            </div>
          </div>

          {/* Total Focus Hours */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4DC3FF] to-[#A470FF] rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-gradient-to-br from-[#4DC3FF]/20 to-[#A470FF]/20 rounded-2xl border border-[#4DC3FF]/30">
                  <Zap className="w-6 h-6 text-[#4DC3FF]" />
                </div>
              </div>
              <div className="text-3xl text-white mb-1">
                {(totalFocusTime / 60).toFixed(1)}h
              </div>
              <div className="text-sm text-white/60">Total Focus Hours</div>
            </div>
          </div>

          {/* Longest Streak */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4DC3FF] to-[#A470FF] rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-gradient-to-br from-[#4DC3FF]/20 to-[#A470FF]/20 rounded-2xl border border-[#A470FF]/30">
                  <Award className="w-6 h-6 text-[#A470FF]" />
                </div>
              </div>
              <div className="text-3xl text-white mb-1">
                {longestStreak} days
              </div>
              <div className="text-sm text-white/60">Longest Streak</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Charts Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Weekly Focus Time Chart */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4DC3FF]/10 to-[#A470FF]/10 rounded-3xl blur-2xl" />
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-5 h-5 text-[#4DC3FF]" />
                  <h3 className="text-white">Weekly Focus Time</h3>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={weeklyData}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="rgba(255,255,255,0.1)"
                    />
                    <XAxis
                      dataKey="day"
                      stroke="rgba(255,255,255,0.5)"
                      style={{ fontSize: "12px" }}
                    />
                    <YAxis
                      stroke="rgba(255,255,255,0.5)"
                      style={{ fontSize: "12px" }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(13, 17, 23, 0.95)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "12px",
                        backdropFilter: "blur(20px)",
                      }}
                      labelStyle={{ color: "#fff" }}
                    />
                    <Bar
                      dataKey="minutes"
                      fill="url(#barGradient)"
                      radius={[8, 8, 0, 0]}
                    />
                    <defs>
                      <linearGradient
                        id="barGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="#4DC3FF" />
                        <stop offset="100%" stopColor="#A470FF" />
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Monthly Trend Chart */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4DC3FF]/10 to-[#A470FF]/10 rounded-3xl blur-2xl" />
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="w-5 h-5 text-[#A470FF]" />
                  <h3 className="text-white">Monthly Trend</h3>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={monthlyData}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="rgba(255,255,255,0.1)"
                    />
                    <XAxis
                      dataKey="week"
                      stroke="rgba(255,255,255,0.5)"
                      style={{ fontSize: "12px" }}
                    />
                    <YAxis
                      stroke="rgba(255,255,255,0.5)"
                      style={{ fontSize: "12px" }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(13, 17, 23, 0.95)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "12px",
                        backdropFilter: "blur(20px)",
                      }}
                      labelStyle={{ color: "#fff" }}
                    />
                    <Line
                      type="monotone"
                      dataKey="hours"
                      stroke="#4DC3FF"
                      strokeWidth={3}
                      dot={{ fill: "#4DC3FF", r: 6 }}
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Completion Rate */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4DC3FF]/10 to-[#A470FF]/10 rounded-3xl blur-2xl" />
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6">
                <h3 className="text-white mb-4">Task Completion Rate</h3>
                <div className="flex items-center gap-6">
                  <div className="relative w-32 h-32">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="12"
                        fill="none"
                      />
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="url(#progressGradient)"
                        strokeWidth="12"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 56}`}
                        strokeDashoffset={`${
                          2 * Math.PI * 56 * (1 - completionRate / 100)
                        }`}
                        strokeLinecap="round"
                        className="drop-shadow-[0_0_8px_rgba(77,195,255,0.6)]"
                      />
                      <defs>
                        <linearGradient
                          id="progressGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#4DC3FF" />
                          <stop offset="100%" stopColor="#A470FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl text-white">
                        {completionRate}%
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-white/60">Total Tasks</span>
                        <span className="text-white">{totalTasks}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/60">Completed</span>
                        <span className="text-emerald-400">
                          {completedTasks}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/60">In Progress</span>
                        <span className="text-[#A470FF]">
                          {
                            tasks.filter((t) => t.status === "in-progress")
                              .length
                          }
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Panel */}
          <div className="lg:col-span-1">
            <SidePanel tasks={tasks} totalFocusTime={totalFocusTime} />
          </div>
        </div>
      </div>
    </>
  );
}
