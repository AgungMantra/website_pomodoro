import { PomodoroTimer } from "../components/pomodoroTimer";
import { Task } from "../App";
import { Clock, PlayCircle } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

interface TimerPageProps {
  currentTask?: Task;
  onComplete: () => void;
  upcomingTasks?: Task[]; // ← dibuat optional + aman
  onStartTask: (id: string) => void;
}

export default function TimerPages({
  currentTask,
  onComplete,
  upcomingTasks = [], // ← default value supaya tidak undefined
  onStartTask,
}: TimerPageProps) {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Timer Section */}
          <div className="lg:col-span-2">
            <PomodoroTimer currentTask={currentTask} onComplete={onComplete} />
          </div>

          {/* Side Panel */}
          <div className="lg:col-span-1 space-y-6">
            {/* Active Task Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4DC3FF] to-[#A470FF] rounded-3xl blur-xl opacity-20" />
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-[#4DC3FF]/20 to-[#A470FF]/20 rounded-xl border border-[#4DC3FF]/30">
                    <Clock className="w-5 h-5 text-[#4DC3FF]" />
                  </div>
                  <h3 className="text-white">Active Task</h3>
                </div>

                {currentTask ? (
                  <div className="space-y-2">
                    <h4 className="text-white">{currentTask.title}</h4>
                    <p className="text-sm text-white/60">
                      {currentTask.description}
                    </p>
                    <div className="flex items-center gap-2 pt-2">
                      <div className="px-3 py-1 bg-[#4DC3FF]/10 border border-[#4DC3FF]/30 rounded-full">
                        <span className="text-xs text-[#4DC3FF]">
                          {currentTask.duration} min
                        </span>
                      </div>
                      <div className="px-3 py-1 bg-[#A470FF]/10 border border-[#A470FF]/30 rounded-full">
                        <span className="text-xs text-[#A470FF] capitalize">
                          {currentTask.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                      <PlayCircle className="w-8 h-8 text-white/30" />
                    </div>
                    <p className="text-white/40">No active task</p>
                    <p className="text-sm text-white/30 mt-1">
                      Start a task to begin focusing
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Upcoming Tasks */}
            <div className="relative">
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6">
                <h3 className="text-white mb-4">Upcoming Tasks</h3>
                <div className="space-y-3">
                  {upcomingTasks.length > 0 ? (
                    upcomingTasks.slice(0, 5).map((task) => (
                      <div key={task.id} className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#4DC3FF]/10 to-[#A470FF]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:border-[#4DC3FF]/30 transition-colors">
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm text-white truncate">
                                {task.title}
                              </h4>
                              <p className="text-xs text-white/50 mt-1">
                                {task.duration} min
                              </p>
                            </div>
                            <button
                              onClick={() => onStartTask(task.id)}
                              className="p-2 hover:bg-[#4DC3FF]/20 rounded-lg transition-colors group/btn"
                            >
                              <PlayCircle className="w-4 h-4 text-white/50 group-hover/btn:text-[#4DC3FF] transition-colors" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-white/40">No upcoming tasks</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
