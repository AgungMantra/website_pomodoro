import { TodoList } from "../components/ToDoList";
import { Task } from "../App";
import { ListTodo, CheckCircle2, Clock, Calendar } from "lucide-react";
import { useState } from "react";



interface TasksPageProps {
  tasks: Task[];
  onAddTask: (task: Omit<Task, "id">) => void;
  onUpdateTask: (id: string, updates: Partial<Task>) => void;
  onDeleteTask: (id: string) => void;
  onStartTask: (id: string) => void;
  currentTaskId: string | null;
}

export default function TasksPage({
  tasks,
  onAddTask,
  onUpdateTask,
  onDeleteTask,
  onStartTask,
  currentTaskId,
}: TasksPageProps) {
  const [filter, setFilter] = useState<"all" | "today" | "week" | "completed">(
    "all"
  );

  
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.status === "completed";
    if (filter === "today") return task.status !== "completed";
    if (filter === "week") return true; // In a real app, filter by date
    return true;
  });

  const pendingCount = tasks.filter((t) => t.status === "pending").length;
  const inProgressCount = tasks.filter(
    (t) => t.status === "in-progress"
  ).length;
  const completedCount = tasks.filter((t) => t.status === "completed").length;

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar - Categories */}
          <div className="lg:col-span-1 space-y-4">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6">
              <h3 className="text-white mb-4 flex items-center gap-2">
                <ListTodo className="w-5 h-5 text-[#4DC3FF]" />
                Categories
              </h3>

              <div className="space-y-2">
                <button
                  onClick={() => setFilter("all")}
                  className={`w-full flex items-center justify-between p-3 rounded-2xl transition-all ${
                    filter === "all"
                      ? "bg-gradient-to-r from-[#4DC3FF]/20 to-[#A470FF]/20 border border-[#4DC3FF]/30"
                      : "bg-white/5 border border-white/10 hover:border-[#4DC3FF]/30"
                  }`}
                >
                  <span className="text-white text-sm">All Tasks</span>
                  <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/70">
                    {tasks.length}
                  </span>
                </button>

                <button
                  onClick={() => setFilter("today")}
                  className={`w-full flex items-center justify-between p-3 rounded-2xl transition-all ${
                    filter === "today"
                      ? "bg-gradient-to-r from-[#4DC3FF]/20 to-[#A470FF]/20 border border-[#4DC3FF]/30"
                      : "bg-white/5 border border-white/10 hover:border-[#4DC3FF]/30"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#4DC3FF]" />
                    <span className="text-white text-sm">Today</span>
                  </div>
                  <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/70">
                    {pendingCount + inProgressCount}
                  </span>
                </button>

                <button
                  onClick={() => setFilter("week")}
                  className={`w-full flex items-center justify-between p-3 rounded-2xl transition-all ${
                    filter === "week"
                      ? "bg-gradient-to-r from-[#4DC3FF]/20 to-[#A470FF]/20 border border-[#4DC3FF]/30"
                      : "bg-white/5 border border-white/10 hover:border-[#4DC3FF]/30"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#A470FF]" />
                    <span className="text-white text-sm">This Week</span>
                  </div>
                  <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/70">
                    {tasks.length}
                  </span>
                </button>

                <button
                  onClick={() => setFilter("completed")}
                  className={`w-full flex items-center justify-between p-3 rounded-2xl transition-all ${
                    filter === "completed"
                      ? "bg-gradient-to-r from-[#4DC3FF]/20 to-[#A470FF]/20 border border-[#4DC3FF]/30"
                      : "bg-white/5 border border-white/10 hover:border-[#4DC3FF]/30"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-white text-sm">Completed</span>
                  </div>
                  <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/70">
                    {completedCount}
                  </span>
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6">
              <h3 className="text-white mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/60">Pending</span>
                  <span className="text-[#4DC3FF]">{pendingCount}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/60">In Progress</span>
                  <span className="text-[#A470FF]">{inProgressCount}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/60">Completed</span>
                  <span className="text-emerald-400">{completedCount}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Task List */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h1 className="text-3xl text-white mb-2">
                {filter === "all" && "All Tasks"}
                {filter === "today" && "Today's Tasks"}
                {filter === "week" && "This Week"}
                {filter === "completed" && "Completed Tasks"}
              </h1>
              <p className="text-white/60">
                {filteredTasks.length}{" "}
                {filteredTasks.length === 1 ? "task" : "tasks"}
              </p>
            </div>

            <TodoList
              tasks={filteredTasks}
              onAddTask={onAddTask}
              onUpdateTask={onUpdateTask}
              onDeleteTask={onDeleteTask}
              onStartTask={onStartTask}
              currentTaskId={currentTaskId}
            />
          </div>
        </div>
      </div>
    </>
  );
}
