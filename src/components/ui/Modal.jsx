import React from 'react';
import { X } from 'lucide-react';

export const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Bottom Sheet */}
      <div className="relative w-full max-w-lg bg-white rounded-t-3xl shadow-xl p-5 animate-slideUp">

        {/* Drag Handle */}
        <div className="w-10 h-1.5 bg-gray-300 rounded-full mx-auto mb-4"></div>

        {/* Header */}
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-base font-semibold text-gray-800">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="text-sm text-gray-600 max-h-[60vh] overflow-y-auto">
          {children}
        </div>

      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>

    </div>
  );
};