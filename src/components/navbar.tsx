import { Timer, Home, ListTodo, BarChart3, User, Menu, X, LogOut, Settings } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

interface HeaderProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

export default function navbar({ isLoggedIn, onLogout }: HeaderProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const isActive = (path: string) => location.pathname === path;

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    onLogout();
    setIsProfileDropdownOpen(false);
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0D1117]/90 border-b border-white/10">
      {/* Neon Underglow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4DC3FF]/50 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 z-50">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4DC3FF] to-[#A470FF] rounded-xl blur-lg opacity-60" />
              <div className="relative bg-gradient-to-br from-[#4DC3FF] to-[#A470FF] p-2 rounded-xl">
                <Timer className="w-6 h-6 text-white" />
              </div>
            </div>
            <span className="text-xl tracking-wider text-white">
              POMODORO
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={`flex items-center gap-2 transition-colors relative group ${
                isActive('/') ? 'text-white' : 'text-white/70 hover:text-[#4DC3FF]'
              }`}
            >
              <Home className="w-4 h-4" />
              Home
              {isActive('/') && (
                <div className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-gradient-to-r from-[#4DC3FF] to-[#A470FF] animate-slide-in" />
              )}
            </Link>
            <Link 
              to="/timer" 
              className={`flex items-center gap-2 transition-colors relative group ${
                isActive('/timer') ? 'text-white' : 'text-white/70 hover:text-[#4DC3FF]'
              }`}
            >
              <Timer className="w-4 h-4" />
              Timer
              {isActive('/timer') && (
                <div className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-gradient-to-r from-[#4DC3FF] to-[#A470FF] animate-slide-in" />
              )}
            </Link>
            <Link 
              to="/tasks" 
              className={`flex items-center gap-2 transition-colors relative group ${
                isActive('/tasks') ? 'text-white' : 'text-white/70 hover:text-[#4DC3FF]'
              }`}
            >
              <ListTodo className="w-4 h-4" />
              Tasks
              {isActive('/tasks') && (
                <div className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-gradient-to-r from-[#4DC3FF] to-[#A470FF] animate-slide-in" />
              )}
            </Link>
            <Link 
              to="/statistics" 
              className={`flex items-center gap-2 transition-colors relative group ${
                isActive('/statistics') ? 'text-white' : 'text-white/70 hover:text-[#4DC3FF]'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              Statistics
              {isActive('/statistics') && (
                <div className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-gradient-to-r from-[#4DC3FF] to-[#A470FF] animate-slide-in" />
              )}
            </Link>
          </nav>

          {/* Right Section - Profile/Login + Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Desktop Profile/Login */}
            <div className="hidden md:block">
              {isLoggedIn ? (
                <div className="relative" ref={dropdownRef}>
                  <button 
                    onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#4DC3FF] to-[#A470FF] rounded-full blur opacity-0 group-hover:opacity-60 transition-opacity" />
                    <div className="relative bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 rounded-full border border-white/20 transition-colors">
                      <User className="w-5 h-5 text-white" />
                    </div>
                  </button>

                  {/* Profile Dropdown */}
                  {isProfileDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-56 animate-fade-in-down">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#4DC3FF]/20 to-[#A470FF]/20 rounded-2xl blur-xl" />
                        <div className="relative backdrop-blur-xl bg-[#0D1117]/95 border border-white/10 rounded-2xl overflow-hidden">
                          <Link
                            to="/profile"
                            onClick={() => setIsProfileDropdownOpen(false)}
                            className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors group"
                          >
                            <User className="w-4 h-4 text-[#4DC3FF]" />
                            <span className="text-white group-hover:text-[#4DC3FF] transition-colors">Profile</span>
                          </Link>
                          <div className="h-px bg-white/10" />
                          <Link
                            to="/profile"
                            onClick={() => setIsProfileDropdownOpen(false)}
                            className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors group"
                          >
                            <Settings className="w-4 h-4 text-[#A470FF]" />
                            <span className="text-white group-hover:text-[#A470FF] transition-colors">Settings</span>
                          </Link>
                          <div className="h-px bg-white/10" />
                          <button
                            onClick={handleLogout}
                            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-500/10 transition-colors group"
                          >
                            <LogOut className="w-4 h-4 text-red-400" />
                            <span className="text-white group-hover:text-red-400 transition-colors">Logout</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link to="/login">
                  <button className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#4DC3FF] to-[#A470FF] rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity" />
                    <div className="relative px-6 py-2 bg-gradient-to-r from-[#4DC3FF] to-[#A470FF] rounded-2xl border border-white/20 group-hover:scale-105 transition-transform">
                      <span className="text-white">Login</span>
                    </div>
                  </button>
                </Link>
              )}
            </div>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden group relative z-50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#4DC3FF] to-[#A470FF] rounded-xl blur opacity-0 group-hover:opacity-60 transition-opacity" />
              <div className="relative bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 rounded-xl border border-white/20 transition-colors">
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Slide Menu */}
        <div
          className={`absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="relative h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4DC3FF]/10 to-[#A470FF]/10 blur-2xl" />
            <div className="relative h-full backdrop-blur-xl bg-[#0D1117]/95 border-l border-white/10 flex flex-col">
              {/* Menu Header */}
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#4DC3FF] to-[#A470FF] rounded-xl blur opacity-60" />
                    <div className="relative bg-gradient-to-br from-[#4DC3FF] to-[#A470FF] p-2 rounded-xl">
                      <Timer className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <span className="text-lg tracking-wider text-white">MENU</span>
                </div>
              </div>

              {/* Menu Items */}
              <nav className="flex-1 p-6 space-y-2">
                <Link
                  to="/"
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
                    isActive('/') 
                      ? 'bg-gradient-to-r from-[#4DC3FF]/20 to-[#A470FF]/20 border border-[#4DC3FF]/30' 
                      : 'hover:bg-white/5'
                  }`}
                >
                  <Home className="w-5 h-5 text-[#4DC3FF]" />
                  <span className="text-white">Home</span>
                </Link>
                <Link
                  to="/timer"
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
                    isActive('/timer') 
                      ? 'bg-gradient-to-r from-[#4DC3FF]/20 to-[#A470FF]/20 border border-[#4DC3FF]/30' 
                      : 'hover:bg-white/5'
                  }`}
                >
                  <Timer className="w-5 h-5 text-[#4DC3FF]" />
                  <span className="text-white">Timer</span>
                </Link>
                <Link
                  to="/tasks"
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
                    isActive('/tasks') 
                      ? 'bg-gradient-to-r from-[#4DC3FF]/20 to-[#A470FF]/20 border border-[#4DC3FF]/30' 
                      : 'hover:bg-white/5'
                  }`}
                >
                  <ListTodo className="w-5 h-5 text-[#4DC3FF]" />
                  <span className="text-white">Tasks</span>
                </Link>
                <Link
                  to="/statistics"
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
                    isActive('/statistics') 
                      ? 'bg-gradient-to-r from-[#4DC3FF]/20 to-[#A470FF]/20 border border-[#4DC3FF]/30' 
                      : 'hover:bg-white/5'
                  }`}
                >
                  <BarChart3 className="w-5 h-5 text-[#4DC3FF]" />
                  <span className="text-white">Statistics</span>
                </Link>

                {isLoggedIn && (
                  <>
                    <div className="h-px bg-white/10 my-4" />
                    <Link
                      to="/profile"
                      className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
                        isActive('/profile') 
                          ? 'bg-gradient-to-r from-[#4DC3FF]/20 to-[#A470FF]/20 border border-[#4DC3FF]/30' 
                          : 'hover:bg-white/5'
                      }`}
                    >
                      <User className="w-5 h-5 text-[#A470FF]" />
                      <span className="text-white">Profile</span>
                    </Link>
                  </>
                )}
              </nav>

              {/* Menu Footer */}
              <div className="p-6 border-t border-white/10">
                {isLoggedIn ? (
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 rounded-2xl transition-colors group"
                  >
                    <LogOut className="w-5 h-5 text-red-400" />
                    <span className="text-red-400">Logout</span>
                  </button>
                ) : (
                  <Link to="/login" className="block">
                    <button className="w-full group relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#4DC3FF] to-[#A470FF] rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity" />
                      <div className="relative px-6 py-3 bg-gradient-to-r from-[#4DC3FF] to-[#A470FF] rounded-2xl flex items-center justify-center gap-2">
                        <span className="text-white">Login</span>
                      </div>
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}