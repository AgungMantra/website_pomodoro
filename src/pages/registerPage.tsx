import { Mail, Lock, User, ArrowRight, Timer } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface RegisterPageProps {
  onRegister: () => void;
}

export default function RegisterPage({ onRegister }: RegisterPageProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === confirmPassword) {
      onRegister();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#4DC3FF]/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#A470FF]/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#4DC3FF]/20 to-transparent" />
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#A470FF]/20 to-transparent" />
        </div>
      </div>

      {/* Register Card */}
      <div className="relative w-full max-w-md animate-fade-in-up">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4DC3FF]/20 to-[#A470FF]/20 rounded-3xl blur-2xl" />
        
        <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4DC3FF] to-[#A470FF] rounded-2xl blur-xl opacity-60" />
              <div className="relative bg-gradient-to-br from-[#4DC3FF] to-[#A470FF] p-3 rounded-2xl">
                <Timer className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl text-white mb-2">Create Account</h1>
            <p className="text-white/60">Start your productivity journey today</p>
          </div>

          {/* Register Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name Input */}
            <div className="group">
              <label className="block text-sm text-white/70 mb-2">Full Name</label>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#4DC3FF]/20 to-[#A470FF]/20 rounded-2xl opacity-0 group-focus-within:opacity-100 transition-opacity blur" />
                <div className="relative flex items-center">
                  <User className="absolute left-4 w-5 h-5 text-white/40 group-focus-within:text-[#4DC3FF] transition-colors" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Alex Johnson"
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-[#4DC3FF]/50 transition-colors"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Email Input */}
            <div className="group">
              <label className="block text-sm text-white/70 mb-2">Email Address</label>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#4DC3FF]/20 to-[#A470FF]/20 rounded-2xl opacity-0 group-focus-within:opacity-100 transition-opacity blur" />
                <div className="relative flex items-center">
                  <Mail className="absolute left-4 w-5 h-5 text-white/40 group-focus-within:text-[#4DC3FF] transition-colors" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@pomodoro.app"
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-[#4DC3FF]/50 transition-colors"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Password Input */}
            <div className="group">
              <label className="block text-sm text-white/70 mb-2">Password</label>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#4DC3FF]/20 to-[#A470FF]/20 rounded-2xl opacity-0 group-focus-within:opacity-100 transition-opacity blur" />
                <div className="relative flex items-center">
                  <Lock className="absolute left-4 w-5 h-5 text-white/40 group-focus-within:text-[#4DC3FF] transition-colors" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-[#4DC3FF]/50 transition-colors"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Confirm Password Input */}
            <div className="group">
              <label className="block text-sm text-white/70 mb-2">Confirm Password</label>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#4DC3FF]/20 to-[#A470FF]/20 rounded-2xl opacity-0 group-focus-within:opacity-100 transition-opacity blur" />
                <div className="relative flex items-center">
                  <Lock className="absolute left-4 w-5 h-5 text-white/40 group-focus-within:text-[#4DC3FF] transition-colors" />
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-[#4DC3FF]/50 transition-colors"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full group relative mt-6"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#4DC3FF] to-[#A470FF] rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="relative px-6 py-4 bg-gradient-to-r from-[#4DC3FF] to-[#A470FF] rounded-2xl flex items-center justify-center gap-2 group-hover:scale-[1.02] transition-transform">
                <span className="text-white">Create Account</span>
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-[#0D1117] text-sm text-white/40">or</span>
            </div>
          </div>

          {/* Login Link */}
          <div className="text-center">
            <p className="text-white/60">
              Already have an account?{' '}
              <Link to="/login" className="text-[#4DC3FF] hover:text-[#A470FF] transition-colors">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}