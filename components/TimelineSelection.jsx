import React from 'react';
import { Compass, MapPin, Anchor } from 'lucide-react';

const TimelineSelection = ({ onSelectTimeline }) => {
  const timelines = [
    { 
      id: 'ancient', 
      name: 'Ancient World', 
      icon: '🏛️', 
      year: '3000 BCE - 500 CE',
      description: 'Walk among pharaohs and philosophers',
      color: 'from-amber-600 to-orange-700'
    },
    { 
      id: 'medieval', 
      name: 'Medieval & Renaissance', 
      icon: '⚔️', 
      year: '500 - 1500 CE',
      description: 'Knights, castles, and rebirth of art',
      color: 'from-red-700 to-rose-800'
    },
    { 
      id: 'exploration', 
      name: 'Age of Exploration', 
      icon: '🌍', 
      year: '1500 - 1800 CE',
      description: 'Discover new worlds and civilizations',
      color: 'from-blue-700 to-cyan-800'
    },
    { 
      id: 'revolution', 
      name: 'Revolutions & Industrial Age', 
      icon: '⚙️', 
      year: '1750 - 1900 CE',
      description: 'Witness the birth of modern society',
      color: 'from-slate-700 to-gray-800'
    },
    { 
      id: 'modern', 
      name: 'Modern History', 
      icon: '🚀', 
      year: '1900 - 2000 CE',
      description: 'The age of technology and change',
      color: 'from-purple-700 to-indigo-800'
    }
  ];

  return (
    <div className="min-h-screen bg-stone-950 relative overflow-hidden">
      {/* World Map Background with rustic colors */}
      <div className="absolute inset-0 opacity-15">
        <svg width="100%" height="100%" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <filter id="roughPaper">
              <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" result="noise"/>
              <feDiffuseLighting in="noise" lightingColor="#d4a574" surfaceScale="1">
                <feDistantLight azimuth="45" elevation="60"/>
              </feDiffuseLighting>
            </filter>
          </defs>
          
          {/* Aged paper background */}
          <rect width="100%" height="100%" fill="#2c1810"/>
          <rect width="100%" height="100%" fill="#8b6f47" opacity="0.3" filter="url(#roughPaper)"/>
          
          {/* Simplified World Continents in rustic brown tones */}
          
          {/* North America */}
          <path d="M 150 150 Q 180 120 220 140 L 280 160 Q 300 180 290 220 L 270 280 Q 250 300 220 290 L 180 270 Q 150 250 140 220 Z" 
                fill="#6b4423" opacity="0.6" stroke="#4a2c1a" strokeWidth="2"/>
          
          {/* South America */}
          <path d="M 220 320 Q 240 310 260 330 L 280 380 Q 290 420 270 460 L 250 480 Q 230 490 220 470 L 210 420 Q 200 380 210 350 Z" 
                fill="#6b4423" opacity="0.6" stroke="#4a2c1a" strokeWidth="2"/>
          
          {/* Europe */}
          <path d="M 520 180 L 560 170 Q 580 175 590 190 L 600 210 Q 595 230 580 235 L 550 240 Q 530 235 520 220 Z" 
                fill="#6b4423" opacity="0.6" stroke="#4a2c1a" strokeWidth="2"/>
          
          {/* Africa */}
          <path d="M 540 260 Q 560 250 580 265 L 600 290 Q 610 330 605 370 L 590 420 Q 570 450 550 445 L 530 420 Q 520 380 525 340 L 530 300 Z" 
                fill="#6b4423" opacity="0.6" stroke="#4a2c1a" strokeWidth="2"/>
          
          {/* Asia */}
          <path d="M 650 140 L 750 130 Q 820 140 870 160 L 920 190 Q 950 220 940 260 L 920 300 Q 880 330 840 320 L 780 300 Q 730 280 700 260 L 670 230 Q 650 200 650 170 Z" 
                fill="#6b4423" opacity="0.6" stroke="#4a2c1a" strokeWidth="2"/>
          
          {/* Australia */}
          <path d="M 880 450 Q 920 440 950 460 L 970 490 Q 975 520 960 540 L 930 550 Q 900 545 880 525 L 870 495 Z" 
                fill="#6b4423" opacity="0.6" stroke="#4a2c1a" strokeWidth="2"/>
          
          {/* Antarctica */}
          <ellipse cx="600" cy="720" rx="300" ry="50" fill="#6b4423" opacity="0.5" stroke="#4a2c1a" strokeWidth="2"/>
          
          {/* Vintage map grid lines */}
          <g stroke="#8b6f47" strokeWidth="0.5" opacity="0.3">
            <line x1="0" y1="200" x2="1200" y2="200"/>
            <line x1="0" y1="400" x2="1200" y2="400"/>
            <line x1="0" y1="600" x2="1200" y2="600"/>
            <line x1="300" y1="0" x2="300" y2="800"/>
            <line x1="600" y1="0" x2="600" y2="800"/>
            <line x1="900" y1="0" x2="900" y2="800"/>
          </g>
          
          {/* Decorative corner ornaments */}
          <g stroke="#8b6f47" fill="none" strokeWidth="2" opacity="0.4">
            <path d="M 20 20 L 60 20 L 60 30 M 20 20 L 20 60 L 30 60"/>
            <path d="M 1180 20 L 1140 20 L 1140 30 M 1180 20 L 1180 60 L 1170 60"/>
            <path d="M 20 780 L 60 780 L 60 770 M 20 780 L 20 740 L 30 740"/>
            <path d="M 1180 780 L 1140 780 L 1140 770 M 1180 780 L 1180 740 L 1170 740"/>
          </g>
          
          {/* Compass rose */}
          <g transform="translate(100, 650)" opacity="0.4">
            <circle cx="0" cy="0" r="40" fill="none" stroke="#8b6f47" strokeWidth="1.5"/>
            <circle cx="0" cy="0" r="30" fill="none" stroke="#8b6f47" strokeWidth="1"/>
            <path d="M0,-35 L5,-10 L0,0 L-5,-10 Z" fill="#d4a574"/>
            <path d="M0,35 L5,10 L0,0 L-5,10 Z" fill="#6b4423"/>
            <path d="M-35,0 L-10,5 L0,0 L-10,-5 Z" fill="#6b4423"/>
            <path d="M35,0 L10,5 L0,0 L10,-5 Z" fill="#6b4423"/>
            <text x="0" y="-45" textAnchor="middle" fill="#8b6f47" fontSize="12" fontFamily="serif">N</text>
          </g>
        </svg>
      </div>

      {/* Decorative corner compass */}
      <div className="absolute top-8 right-8 opacity-40">
        <div className="relative">
          <Compass className="w-20 h-20 text-amber-700 animate-spin" style={{ animationDuration: '40s' }} />
          <Anchor className="w-8 h-8 text-amber-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-amber-500 mb-3 tracking-wider" 
              style={{ 
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                fontFamily: 'Cinzel, Georgia, serif'
              }}>
            Journey Through Time
          </h2>
          <p className="text-xl text-amber-300/90 italic font-serif" style={{ fontFamily: 'Crimson Text, Georgia, serif' }}>
            Select your destination in history
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Timeline vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-700 via-amber-800 to-amber-900 hidden md:block">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-600 rounded-full shadow-lg shadow-amber-600/50"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-600 rounded-full shadow-lg shadow-amber-600/50"></div>
          </div>

          {/* Timeline items */}
          <div className="space-y-8">
            {timelines.map((timeline, index) => (
              <div
                key={timeline.id}
                className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col animate-slide-in`}
                style={{ 
                  animation: `${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} 0.8s ease-out forwards`,
                  animationDelay: `${index * 0.15}s` 
                }}
              >
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <button
                    onClick={() => onSelectTimeline(timeline.id)}
                    className="group w-full bg-gradient-to-br from-stone-900/80 to-amber-950/60 backdrop-blur-sm border-2 border-amber-800/60 rounded-lg p-6 hover:border-amber-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-700/20 text-left"
                  >
                    <div className={`flex items-start gap-4 ${index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''}`}>
                      <div className="text-5xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {timeline.icon}
                      </div>
                      <div className="flex-1">
                        <div className={`inline-block px-3 py-1 bg-gradient-to-r ${timeline.color} rounded-full text-xs font-semibold text-white mb-2 font-serif`}>
                          {timeline.year}
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-amber-400 mb-2 group-hover:text-amber-300 transition-colors" 
                            style={{ fontFamily: 'Cinzel, Georgia, serif' }}>
                          {timeline.name}
                        </h3>
                        <p className="text-sm text-amber-300/70 group-hover:text-amber-200/80 transition-colors font-serif italic" 
                           style={{ fontFamily: 'Crimson Text, Georgia, serif' }}>
                          {timeline.description}
                        </p>
                        <div className="mt-3 flex items-center gap-2 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm font-semibold font-serif">Embark on Journey</span>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>

                {/* Timeline node (center) */}
                <div className="hidden md:flex w-2/12 justify-center items-center">
                  <div className="relative">
                    <div className="w-6 h-6 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full border-4 border-stone-900 shadow-lg shadow-amber-600/50 z-10 relative"></div>
                    <div className="absolute inset-0 w-6 h-6 bg-amber-600 rounded-full animate-ping opacity-30"></div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-stone-900/50 backdrop-blur-sm border border-amber-800/40 rounded-full">
            <Compass className="w-5 h-5 text-amber-700" />
            <span className="text-amber-400 text-sm font-serif font-medium" style={{ fontFamily: 'Crimson Text, Georgia, serif' }}>
              Chart your course through history
            </span>
            <Compass className="w-5 h-5 text-amber-700" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap');
        
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default TimelineSelection;
