import { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { Button } from './ui/button';
import type { Task } from '../App';

type TimerMode = 'pomodoro' | 'shortBreak' | 'longBreak';

interface PomodoroTimerProps {
  currentTask?: Task;
  onComplete?: () => void;
}

export function PomodoroTimer({ currentTask, onComplete }: PomodoroTimerProps) {
  const [mode, setMode] = useState<TimerMode>('pomodoro');
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);

  const durations = {
    pomodoro: 25 * 60,
    shortBreak: 5 * 60,
    longBreak: 15 * 60
  };

  useEffect(() => {
    setTimeLeft(durations[mode]);
    setIsRunning(false);
  }, [mode]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            if (mode === 'pomodoro' && onComplete) {
              onComplete();
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft, mode, onComplete]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const progress = ((durations[mode] - timeLeft) / durations[mode]) * 100;

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(durations[mode]);
  };

  return (
    <div className="relative">
      {/* Glassmorphism Card */}
      <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 lg:p-12">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#4DC3FF]/20 to-[#A470FF]/20 rounded-3xl blur-2xl" />
        
        <div className="relative space-y-8">
          {/* Mode Selector */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setMode('pomodoro')}
              className={`px-6 py-2 rounded-full transition-all ${
                mode === 'pomodoro'
                  ? 'bg-gradient-to-r from-[#4DC3FF] to-[#A470FF] text-white shadow-lg shadow-[#4DC3FF]/50'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
              }`}
            >
              Pomodoro
            </button>
            <button
              onClick={() => setMode('shortBreak')}
              className={`px-6 py-2 rounded-full transition-all ${
                mode === 'shortBreak'
                  ? 'bg-gradient-to-r from-[#4DC3FF] to-[#A470FF] text-white shadow-lg shadow-[#4DC3FF]/50'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
              }`}
            >
              Short Break
            </button>
            <button
              onClick={() => setMode('longBreak')}
              className={`px-6 py-2 rounded-full transition-all ${
                mode === 'longBreak'
                  ? 'bg-gradient-to-r from-[#4DC3FF] to-[#A470FF] text-white shadow-lg shadow-[#4DC3FF]/50'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
              }`}
            >
              Long Break
            </button>
          </div>

          {/* Current Task Display */}
          {currentTask && (
            <div className="text-center">
              <p className="text-white/60 text-sm">Working on</p>
              <p className="text-white mt-1">{currentTask.title}</p>
            </div>
          )}

          {/* Circular Timer */}
          <div className="flex items-center justify-center">
            <div className="relative w-80 h-80">
              {/* Background Circle */}
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="160"
                  cy="160"
                  r="140"
                  stroke="rgba(255, 255, 255, 0.1)"
                  strokeWidth="12"
                  fill="none"
                />
                {/* Progress Circle with Glow */}
                <circle
                  cx="160"
                  cy="160"
                  r="140"
                  stroke="url(#gradient)"
                  strokeWidth="12"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 140}`}
                  strokeDashoffset={`${2 * Math.PI * 140 * (1 - progress / 100)}`}
                  className="transition-all duration-1000 ease-linear drop-shadow-[0_0_20px_rgba(77,195,255,0.8)]"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4DC3FF" />
                    <stop offset="100%" stopColor="#A470FF" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Timer Display */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-7xl text-white tracking-wider" style={{ fontVariantNumeric: 'tabular-nums' }}>
                  {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
                </div>
                <div className="text-white/60 mt-2 tracking-widest uppercase text-sm">
                  {mode === 'pomodoro' ? 'Focus Time' : mode === 'shortBreak' ? 'Short Break' : 'Long Break'}
                </div>
              </div>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex items-center justify-center gap-4">
            {!isRunning ? (
              <Button
                onClick={handleStart}
                className="bg-gradient-to-r from-[#4DC3FF] to-[#A470FF] hover:from-[#4DC3FF]/80 hover:to-[#A470FF]/80 text-white px-8 py-6 rounded-2xl shadow-lg shadow-[#4DC3FF]/30 transition-all hover:shadow-[#4DC3FF]/50 hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2" />
                Start
              </Button>
            ) : (
              <Button
                onClick={handlePause}
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-6 rounded-2xl border border-white/20 transition-all hover:scale-105"
              >
                <Pause className="w-5 h-5 mr-2" />
                Pause
              </Button>
            )}
            <Button
              onClick={handleReset}
              className="bg-white/5 hover:bg-white/10 text-white px-8 py-6 rounded-2xl border border-white/20 transition-all hover:scale-105"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Reset
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}