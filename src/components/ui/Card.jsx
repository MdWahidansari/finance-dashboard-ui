import React from 'react';
import { cn } from '../../lib/utils';

export const Card = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        "relative rounded-xl p-4",

        // Clean light background
        "bg-white",

        // Proper border for visibility
        "border border-gray-200",

        // Soft shadow (not heavy)
        "shadow-sm",

        // Hover effect (safe)
        "hover:shadow-md transition-all duration-200",

        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};