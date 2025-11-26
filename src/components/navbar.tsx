import { Timer, Home, ListTodo, BarChart3, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0D1117]/80 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4DC3FF] to-[#A470FF] rounded-xl blur-lg opacity-60" />
                  <div className="relative bg-gradient-to-br from-[#4DC3FF] to-[#A470FF] p-2 rounded-xl">
                    <Timer className="w-6 h-6 text-white" />
                  </div>
                </div>
                <span className="text-xl tracking-wider text-white">
                  POMODORO
                </span>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                className={`flex items-center gap-2 transition-colors relative group ${
                  isActive("/")
                    ? "text-white"
                    : "text-white/70 hover:text-[#4DC3FF]"
                }`}
              >
                <Home className="w-4 h-4" />
                Home
                {isActive("/") && (
                  <div className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-gradient-to-r from-[#4DC3FF] to-[#A470FF]" />
                )}
              </Link>
              <Link
                to="/timer"
                className={`flex items-center gap-2 transition-colors relative group ${
                  isActive("/timer")
                    ? "text-white"
                    : "text-white/70 hover:text-[#4DC3FF]"
                }`}
              >
                <Timer className="w-4 h-4" />
                Timer
                {isActive("/timer") && (
                  <div className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-gradient-to-r from-[#4DC3FF] to-[#A470FF]" />
                )}
              </Link>
              <Link
                to="/tasks"
                className={`flex items-center gap-2 transition-colors relative group ${
                  isActive("/tasks")
                    ? "text-white"
                    : "text-white/70 hover:text-[#4DC3FF]"
                }`}
              >
                <ListTodo className="w-4 h-4" />
                Tasks
                {isActive("/tasks") && (
                  <div className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-gradient-to-r from-[#4DC3FF] to-[#A470FF]" />
                )}
              </Link>
              <Link
                to="/statistics"
                className={`flex items-center gap-2 transition-colors relative group ${
                  isActive("/statistics")
                    ? "text-white"
                    : "text-white/70 hover:text-[#4DC3FF]"
                }`}
              >
                <BarChart3 className="w-4 h-4" />
                Statistics
                {isActive("/statistics") && (
                  <div className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-gradient-to-r from-[#4DC3FF] to-[#A470FF]" />
                )}
              </Link>
            </nav>

            {/* User Profile */}
            <button className="group relative">
              <Link to="/profil" className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4DC3FF] to-[#A470FF] rounded-full blur opacity-0 group-hover:opacity-60 transition-opacity"></div>
                <div className="relative bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 rounded-full border border-white/20 transition-colors">
                  <User className="w-5 h-5 text-white" />
                </div>
              </Link>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
