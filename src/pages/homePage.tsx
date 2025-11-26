import Navbar from "../components/navbar";
import { Timer, ListChecks, TrendingUp, Zap, Play } from "lucide-react";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

const homePage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 md:py-32">
          <div className="text-center space-y-8">
            {/* Glowing Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#4DC3FF]/30 bg-[#4DC3FF]/5 backdrop-blur-sm">
              <Zap className="w-4 h-4 text-[#4DC3FF]" />
              <span className="text-sm text-[#4DC3FF]">
                Boost Your Productivity
              </span>
            </div>

            {/* Hero Title */}
            <h1 className="text-5xl md:text-7xl tracking-tight">
              <span className="block text-white">Focus. Work. Achieve.</span>
              <span className="block mt-2 bg-gradient-to-r from-[#4DC3FF] to-[#A470FF] bg-clip-text text-transparent">
                Master Your Time
              </span>
            </h1>

            {/* Hero Description */}
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              A futuristic Pomodoro app designed to help you focus, manage
              tasks, and track your productivity with elegance.
            </p>

            {/* CTA Button */}
            <div className="flex items-center justify-center gap-4 pt-4">
              <Link to="/timer">
                <button className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4DC3FF] to-[#A470FF] rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity" />
                  <div className="relative px-8 py-4 bg-gradient-to-r from-[#4DC3FF] to-[#A470FF] rounded-2xl flex items-center gap-3">
                    <Play className="w-5 h-5 text-white" />
                    <span className="text-white">Start Your Focus Session</span>
                  </div>
                </button>
              </Link>
            </div>
          </div>

          {/* Timer Preview */}
          <div className="mt-20 max-w-md mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4DC3FF] to-[#A470FF] rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8">
                {/* Circular Timer Preview */}
                <div className="relative mx-auto w-48 h-48">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray="552.92"
                      strokeDashoffset="138.23"
                      strokeLinecap="round"
                      className="drop-shadow-[0_0_12px_rgba(77,195,255,0.6)]"
                    />
                    <defs>
                      <linearGradient
                        id="gradient"
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
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-5xl text-white">25:00</span>
                    <span className="text-sm text-white/50 mt-2">
                      Focus Time
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-white mb-4">
              Everything You Need to Stay Productive
            </h2>
            <p className="text-white/60">
              Powerful features in a beautiful, minimal interface
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1: Timer */}
            <Link to="/timer" className="group block">
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4DC3FF] to-[#A470FF] rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity" />
                <div className="relative h-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors">
                  <div className="mb-6">
                    <div className="inline-flex p-3 bg-gradient-to-br from-[#4DC3FF]/20 to-[#A470FF]/20 rounded-2xl border border-[#4DC3FF]/30">
                      <Timer className="w-8 h-8 text-[#4DC3FF]" />
                    </div>
                  </div>
                  <h3 className="text-xl text-white mb-3">Pomodoro Timer</h3>
                  <p className="text-white/60 leading-relaxed">
                    Focus in 25-minute intervals with automatic breaks.
                    Customize durations to fit your workflow.
                  </p>
                </div>
              </div>
            </Link>

            {/* Feature 2: Tasks */}
            <Link to="/tasks" className="group block">
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4DC3FF] to-[#A470FF] rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity" />
                <div className="relative h-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors">
                  <div className="mb-6">
                    <div className="inline-flex p-3 bg-gradient-to-br from-[#4DC3FF]/20 to-[#A470FF]/20 rounded-2xl border border-[#A470FF]/30">
                      <ListChecks className="w-8 h-8 text-[#A470FF]" />
                    </div>
                  </div>
                  <h3 className="text-xl text-white mb-3">Task Management</h3>
                  <p className="text-white/60 leading-relaxed">
                    Organize your work with smart task lists. Track progress and
                    prioritize what matters most.
                  </p>
                </div>
              </div>
            </Link>

            {/* Feature 3: Statistics */}
            <Link to="/statistics" className="group block">
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4DC3FF] to-[#A470FF] rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity" />
                <div className="relative h-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors">
                  <div className="mb-6">
                    <div className="inline-flex p-3 bg-gradient-to-br from-[#4DC3FF]/20 to-[#A470FF]/20 rounded-2xl border border-[#4DC3FF]/30">
                      <TrendingUp className="w-8 h-8 text-[#4DC3FF]" />
                    </div>
                  </div>
                  <h3 className="text-xl text-white mb-3">
                    Analytics & Insights
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    Visualize your productivity patterns. Track focus time,
                    completed tasks, and streaks.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4DC3FF]/10 to-[#A470FF]/10 rounded-3xl blur-3xl" />
            <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl md:text-5xl bg-gradient-to-r from-[#4DC3FF] to-[#A470FF] bg-clip-text text-transparent mb-2">
                    25 min
                  </div>
                  <div className="text-white/60">Optimal Focus Duration</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl bg-gradient-to-r from-[#4DC3FF] to-[#A470FF] bg-clip-text text-transparent mb-2">
                    4 sessions
                  </div>
                  <div className="text-white/60">Before Long Break</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl bg-gradient-to-r from-[#4DC3FF] to-[#A470FF] bg-clip-text text-transparent mb-2">
                    ∞
                  </div>
                  <div className="text-white/60">Productivity Boost</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default homePage;
