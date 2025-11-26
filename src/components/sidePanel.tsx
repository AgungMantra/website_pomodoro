import { Clock, TrendingUp, ListChecks } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { Task } from '../App';

interface SidePanelProps {
  tasks: Task[];
  totalFocusTime: number;
}

export function SidePanel({ tasks, totalFocusTime }: SidePanelProps) {
  const upcomingTasks = tasks.filter(t => t.status === 'pending').slice(0, 3);
  const completedCount = tasks.filter(t => t.status === 'completed').length;

  // Mock data for the chart
  const chartData = [
    { day: 'Mon', minutes: 75 },
    { day: 'Tue', minutes: 100 },
    { day: 'Wed', minutes: 50 },
    { day: 'Thu', minutes: 125 },
    { day: 'Fri', minutes: 150 },
    { day: 'Sat', minutes: 75 },
    { day: 'Sun', minutes: totalFocusTime }
  ];

  return (
    <div className="space-y-6">
      {/* Today's Focus Time Card */}
      <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4DC3FF]/10 to-[#A470FF]/10 rounded-2xl blur-xl" />
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gradient-to-br from-[#4DC3FF] to-[#A470FF] rounded-xl">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-white">Today's Focus</h3>
          </div>
          
          <div className="space-y-2">
            <div className="text-4xl text-white">{totalFocusTime}</div>
            <div className="text-white/60 text-sm">minutes focused</div>
            
            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-sm">
              <span className="text-white/60">Sessions completed</span>
              <span className="text-white">{Math.floor(totalFocusTime / 25)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Card */}
      <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4DC3FF]/10 to-[#A470FF]/10 rounded-2xl blur-xl" />
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gradient-to-br from-[#A470FF] to-[#4DC3FF] rounded-xl">
              <ListChecks className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-white">Task Progress</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-white/60 text-sm">Total Tasks</span>
              <span className="text-white">{tasks.length}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/60 text-sm">Completed</span>
              <span className="text-green-400">{completedCount}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/60 text-sm">In Progress</span>
              <span className="text-[#4DC3FF]">{tasks.filter(t => t.status === 'in-progress').length}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/60 text-sm">Pending</span>
              <span className="text-white/70">{tasks.filter(t => t.status === 'pending').length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Tasks Card */}
      <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4DC3FF]/10 to-[#A470FF]/10 rounded-2xl blur-xl" />
        
        <div className="relative">
          <h3 className="text-white mb-4">Upcoming Tasks</h3>
          
          <div className="space-y-3">
            {upcomingTasks.length > 0 ? (
              upcomingTasks.map((task) => (
                <div
                  key={task.id}
                  className="p-3 bg-white/5 rounded-xl border border-white/10 hover:border-[#4DC3FF]/30 transition-all"
                >
                  <div className="text-white text-sm mb-1">{task.title}</div>
                  <div className="text-white/50 text-xs">{task.duration} min</div>
                </div>
              ))
            ) : (
              <div className="text-center py-4 text-white/40 text-sm">
                No upcoming tasks
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Weekly Chart Card */}
      <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4DC3FF]/10 to-[#A470FF]/10 rounded-2xl blur-xl" />
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gradient-to-br from-[#4DC3FF] to-[#A470FF] rounded-xl">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-white">Weekly Activity</h3>
          </div>
          
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={chartData}>
              <defs>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#4DC3FF" />
                  <stop offset="100%" stopColor="#A470FF" />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis 
                dataKey="day" 
                stroke="rgba(255,255,255,0.5)" 
                tick={{ fill: 'rgba(255,255,255,0.6)' }}
              />
              <YAxis 
                stroke="rgba(255,255,255,0.5)" 
                tick={{ fill: 'rgba(255,255,255,0.6)' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(13, 17, 23, 0.9)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '12px',
                  backdropFilter: 'blur(10px)'
                }}
                labelStyle={{ color: 'white' }}
              />
              <Line 
                type="monotone" 
                dataKey="minutes" 
                stroke="url(#lineGradient)" 
                strokeWidth={3}
                dot={{ fill: '#4DC3FF', r: 4 }}
                activeDot={{ r: 6, fill: '#A470FF' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}