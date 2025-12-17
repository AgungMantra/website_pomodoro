import { useState, useEffect } from "react";

import HomePage from "./pages/homePage";
import TimerPages from "./pages/timerPages";
import TaskPages from "./pages/taskPages";
import StatisticPage from "./pages/statisticPage";
import ProfilPage from "./pages/profilPage";
import ScrolltoTop from "./scrolltoTop";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export interface Task {
  id: string;
  title: string;
  description: string;
  duration: number;
  duration_break: number;
  repetition: number;
  status: "pending" | "in-progress" | "completed";
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [totalFocusTime, setTotalFocusTime] = useState<number>(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentTaskId, setCurrentTaskId] = useState<string | null>(null);

  // 👉 LOAD TASKS FROM LOCAL STORAGE
  useEffect(() => {
    const stored = localStorage.getItem("tasks");
    if (stored) setTasks(JSON.parse(stored));
  }, []);

  // 👉 SAVE TASKS TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleLogin = () => setIsLoggedIn(true);
  const handleRegister = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  const addTask = (task: Omit<Task, "id">) => {
    const newTask: Task = {
      ...task,
      id: Date.now().toString(),
    };
    setTasks([...tasks, newTask]);
  };

  const updateTask = (id: string, updates: Partial<Task>) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, ...updates } : t)));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((t) => t.id !== id));
    if (currentTaskId === id) setCurrentTaskId(null);
  };

  const startTask = (id: string) => {
    setCurrentTaskId(id);
    updateTask(id, { status: "in-progress" });
  };

  const handleTimerComplete = () => {
    if (currentTaskId) {
      updateTask(currentTaskId, { status: "completed" });
      setTotalFocusTime((prev) => prev + 0);
    }
  };

  const currentTask = tasks.find((t) => t.id === currentTaskId);
  const upcomingTasks = tasks.filter((t) => t.status === "pending");
  const completedTasksCount = tasks.filter((t) => t.status === "completed")
    .length;

  return (
    <Router>
      <ScrolltoTop />
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />

      <div className="min-h-screen bg-gradient-to-br from-[#0D1117] via-[#161B22] to-[#0D1117] flex flex-col">
        <main className="flex-1 page-transition">
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route
              path="/timer"
              element={
                <TimerPages
                  currentTask={currentTask}
                  onComplete={handleTimerComplete}
                  upcomingTasks={upcomingTasks}
                  onStartTask={startTask}
                />
              }
            />

            <Route
              path="/tasks"
              element={
                <TaskPages
                  tasks={tasks}
                  onAddTask={addTask}
                  onStartTask={startTask}
                  onDeleteTask={deleteTask}
                  onUpdateTask={updateTask}
                  currentTaskId={currentTaskId}
                />
              }
            />

            <Route
              path="/statistics"
              element={
                <StatisticPage
                  tasks={tasks}
                  totalFocusTime={totalFocusTime}
                />
              }
            />

            <Route
              path="/login"
              element={<LoginPage onLogin={handleLogin} />}
            />

            <Route
              path="/register"
              element={<RegisterPage onRegister={handleRegister} />}
            />

            <Route
              path="/profile"
              element={
                <ProfilPage
                  totalFocusTime={totalFocusTime}
                  completedTasks={completedTasksCount}
                />
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
