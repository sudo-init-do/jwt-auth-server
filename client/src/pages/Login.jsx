import { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post('http://localhost:5000/api/login', {
        username,
        password,
      });
      localStorage.setItem('token', res.data.token);
      window.location.href = '/dashboard';
    } catch {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div 
      className="relative flex items-center justify-center min-h-screen px-4 overflow-hidden"
      style={{
        background: `
          linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%),
          linear-gradient(45deg, #fa709a 0%, #fee140 100%)
        `,
        backgroundBlendMode: 'multiply'
      }}
    >
      {/* Animated Mountain Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg 
          className="absolute bottom-0 w-full h-full" 
          viewBox="0 0 1200 800" 
          preserveAspectRatio="xMidYMax slice"
        >
          <defs>
            <linearGradient id="mountain1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff6b6b" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ffa726" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="mountain2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff8a65" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#ffb74d" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="mountain3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffab91" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ffcc02" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          
          {/* Back mountains */}
          <polygon 
            points="0,800 200,400 400,450 600,350 800,400 1000,300 1200,350 1200,800" 
            fill="url(#mountain1)"
            className="animate-pulse"
            style={{ animationDuration: '8s' }}
          />
          
          {/* Middle mountains */}
          <polygon 
            points="0,800 150,500 350,550 550,450 750,500 950,400 1200,450 1200,800" 
            fill="url(#mountain2)"
            className="animate-pulse"
            style={{ animationDuration: '6s', animationDelay: '1s' }}
          />
          
          {/* Front mountains */}
          <polygon 
            points="0,800 100,600 300,650 500,550 700,600 900,500 1100,550 1200,800" 
            fill="url(#mountain3)"
            className="animate-pulse"
            style={{ animationDuration: '4s', animationDelay: '2s' }}
          />
        </svg>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-sm">
        {/* Login Card */}
        <div className="relative p-8 shadow-2xl bg-white/15 backdrop-blur-lg rounded-3xl border border-white/30 before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:to-transparent before:rounded-3xl before:pointer-events-none">
          {/* Header */}
          <div className="relative z-10 mb-8 text-center">
            <h1 className="mb-3 text-3xl font-light text-white drop-shadow-lg">Login #10</h1>
            <p className="text-white/90 text-base font-light tracking-wide">Have an account?</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="relative z-10 p-3 mb-6 border rounded-lg bg-red-500/20 border-red-400/40 backdrop-blur-sm">
              <p className="text-sm text-center text-red-100 font-medium">{error}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleLogin} className="relative z-10 space-y-5">
            {/* Username Input */}
            <div className="relative group">
              <input
                type="text"
                placeholder="Username"
                className="w-full px-5 py-4 text-white transition-all duration-300 border rounded-full bg-white/10 border-white/30 placeholder-white/70 focus:outline-none focus:border-white/60 focus:bg-white/20 focus:shadow-lg focus:scale-[1.02] group-hover:bg-white/15"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>

            {/* Password Input */}
            <div className="relative group">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-5 py-4 pr-14 text-white transition-all duration-300 border rounded-full bg-white/10 border-white/30 placeholder-white/70 focus:outline-none focus:border-white/60 focus:bg-white/20 focus:shadow-lg focus:scale-[1.02] group-hover:bg-white/15"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute transform -translate-y-1/2 right-4 top-1/2 text-white/70 hover:text-white transition-all duration-200 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full py-4 mt-6 font-semibold text-white transition-all duration-300 rounded-full shadow-xl bg-gradient-to-r from-orange-400 via-pink-400 to-red-400 hover:from-orange-500 hover:via-pink-500 hover:to-red-500 hover:shadow-2xl hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-white/30"
            >
              SIGN IN
            </button>

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between pt-4 text-sm">
              <label className="flex items-center cursor-pointer text-white/90 hover:text-white transition-colors duration-200">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <div className={`relative w-5 h-5 rounded border-2 border-white/50 mr-3 flex items-center justify-center transition-all duration-200 ${rememberMe ? 'bg-white/30 border-white/70' : 'hover:border-white/70'}`}>
                  {rememberMe && (
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                Remember Me
              </label>
              <button
                type="button"
                className="text-white/90 hover:text-white transition-all duration-200 hover:underline focus:outline-none focus:underline"
              >
                Forgot Password?
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
