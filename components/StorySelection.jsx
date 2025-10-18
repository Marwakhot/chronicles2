import React from 'react';
import { ArrowLeft } from 'lucide-react';

const StorySelection = ({ timeline, onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-900 via-amber-900 to-black relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-700 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-amber-300 hover:text-amber-100 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Timeline Selection</span>
        </button>

        {/* Content */}
        <div className="text-center space-y-6 mt-20">
          <h2 className="text-5xl font-bold text-amber-300 mb-4">
            {timeline.charAt(0).toUpperCase() + timeline.slice(1)} Era
          </h2>
          <p className="text-2xl text-amber-100 mb-8">Story options coming soon...</p>
          
          <div className="max-w-2xl mx-auto bg-amber-900/20 backdrop-blur-sm border-2 border-amber-700/50 rounded-xl p-8">
            <p className="text-amber-200">
              This section will contain interactive stories from the{' '}
              <span className="font-bold text-amber-100">
                {timeline.charAt(0).toUpperCase() + timeline.slice(1)}
              </span>{' '}
              timeline. Each story will allow you to make choices that change the course of history.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorySelection;
