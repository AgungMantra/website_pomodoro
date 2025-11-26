import { useState } from "react";
import HomePage from "./pages/homePage";
import TimerPages from "./pages/timerPages";
import TaskPages from "./pages/taskPages";
import StatisticPage from "./pages/statisticPage";
import ProfilPage from "./pages/profilPage";
import ScrolltoTop from "./scrolltoTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export interface Task {
  id: string;
  title: string;
  description: string;
  duration: number;
  status: "pending" | "in-progress" | "completed";
}

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [totalFocusTime, setTotalFocusTime] = useState<number>(0);

  return (
    <>
      <Router>
        <ScrolltoTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/timer" element={<TimerPages />} />

          {/* Pastikan passing props */}
          <Route
            path="/tasks"
            element={
              <TaskPages tasks={tasks} setTasks={setTasks} />
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

          <Route path="/profil" element={<ProfilPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
