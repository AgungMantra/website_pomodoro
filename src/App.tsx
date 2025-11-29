import { useState } from "react";

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

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleRegister = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <Router>
        <ScrolltoTop />
        <Navbar isLoggedIn= {isLoggedIn} onLogout={handleLogin}/>
        <div className="min-h-screen bg-gradient-to-br from-[#0D1117] via-[#161B22] to-[#0D1117] flex flex-col">
          <main className="flex-1 page-transition">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/timer" element={<TimerPages />} />
              <Route path="/tasks" element={<TaskPages tasks={tasks} />} />
              <Route
                path="/statistics"
                element={
                  <StatisticPage
                    tasks={tasks}
                    totalFocusTime={totalFocusTime}
                  />
                }
              />
              <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
              <Route path="/register" element={<RegisterPage onRegister={handleRegister} />} />
              <Route path="/profile" element={<ProfilPage />} />
            </Routes>
          </main>
          <Footer/>
        </div>
      </Router>
    </>
  );
}

export default App;
