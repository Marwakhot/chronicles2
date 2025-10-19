'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { BookOpen, Mail, Lock, ArrowRight } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const result = await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (result?.error) {
        setError(result.error);
      } else if (result?.ok) {
        router.push('/');
        router.refresh();
      }
    } catch (error) {
      setError('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-stone-900 to-black flex items-center justify-center px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 text-9xl">📜</div>
        <div className="absolute bottom-20 right-20 text-9xl">⏳</div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo/Title */}
        <div className="text-center mb-8">
          <BookOpen className="w-16 h-16 text-amber-400 mx-auto mb-4" />
          <h1 className="text-4xl font-serif font-bold text-amber-400 mb-2" style={{ fontFamily: 'Cinzel, Georgia, serif' }}>
            Chronicles: Rewritten
          </h1>
          <p className="text-amber-300/70 font-serif italic" style={{ fontFamily: 'Crimson Text, Georgia, serif' }}>
            Login to continue your journey
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-stone-900/80 backdrop-blur-sm border-2 border-amber-800/60 rounded-xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Error Message */}
            {error && (
              <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-4">
                <p className="text-red-300 text-sm text-center">{error}</p>
              </div>
            )}

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-amber-300 font-serif mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-600" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-stone-800/50 border border-amber-800/40 rounded-lg text-amber-100 placeholder-amber-700/50 focus:outline-none focus:border-amber-600 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-amber-300 font-serif mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-600" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-stone-800/50 border border-amber-800/40 rounded-lg text-amber-100 placeholder-amber-700/50 focus:outline-none focus:border-amber-600 transition-colors"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-white font-serif font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span>Logging in...</span>
              ) : (
                <>
                  <span>Enter the Chronicles</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <p className="text-amber-300/70 font-serif">
              Don't have an account?{' '}
              <Link 
                href="/signup" 
                className="text-amber-400 hover:text-amber-300 font-semibold transition-colors"
              >
                Create one
              </Link>
            </p>
          </div>
        </div>

        {/* Continue as Guest */}
        <div className="mt-6 text-center">
          <Link 
            href="/" 
            className="text-amber-400/70 hover:text-amber-300 font-serif text-sm transition-colors"
          >
            Continue as guest
          </Link>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap');
      `}</style>
    </div>
  );
}
