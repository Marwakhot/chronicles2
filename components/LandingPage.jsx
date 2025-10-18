import React from 'react';
import { Clock } from 'lucide-react';

const LandingPage = ({ onEnter }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-stone-900 to-black flex items-center justify-center relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 space-y-8">
        {/* Animated Clock */}
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-amber-600 rounded-full blur-2xl opacity-50 animate-pulse"></div>
          <Clock className="w-32 h-32 text-amber-400 relative animate-spin" style={{ animationDuration: '20s' }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 border-4 border-amber-500 rounded-full animate-ping opacity-50"></div>
          </div>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-6xl font-serif font-bold text-amber-400 tracking-wider animate-fade-in" 
              style={{ fontFamily: 'Cinzel, Georgia, serif' }}>
            Chronicles: Rewritten
          </h1>
          <p className="text-xl text-amber-200 italic animate-fade-in font-serif" 
             style={{ animationDelay: '0.5s', fontFamily: 'Crimson Text, Georgia, serif' }}>
            Walk the roads history forgotten.
          </p>
        </div>

        {/* Enter Button */}
        <button
          onClick={onEnter}
          className="mt-8 px-8 py-4 bg-amber-700 hover:bg-amber-600 text-white font-serif font-semibold rounded-lg transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-amber-500/50 animate-fade-in"
          style={{ animationDelay: '1s', fontFamily: 'Cinzel, Georgia, serif' }}
        >
          Begin Your Journey
        </button>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap');
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
