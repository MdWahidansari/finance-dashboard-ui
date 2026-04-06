import React from 'react';
export const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-[50vh] px-4">

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm px-6 py-5 flex flex-col items-center gap-4">

        {/* Animated Dots */}
        <div className="flex gap-2">
          <span className="w-2.5 h-2.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.2s]"></span>
          <span className="w-2.5 h-2.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.1s]"></span>
          <span className="w-2.5 h-2.5 bg-indigo-400 rounded-full animate-bounce"></span>
        </div>

        {/* Text */}
        <p className="text-sm text-gray-500 font-medium">
          Loading your data...
        </p>

      </div>

    </div>
  );
};