import React from "react";
import { cn } from "../../lib/utils";

export function BentoGrid({ items = [] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-4 max-w-7xl mx-auto">

      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            "bg-white rounded-2xl border border-gray-200 p-5",
            "flex flex-col justify-between",
            "hover:shadow-md transition-all duration-200"
          )}
        >

          {/* Top Section */}
          <div className="flex items-center justify-between mb-4">

            {/* Icon */}
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-indigo-50 text-indigo-500">
              {item.icon}
            </div>

            {/* Status */}
            <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
              {item.status || "Active"}
            </span>

          </div>

          {/* Title */}
          <div>
            <h3 className="text-base font-semibold text-gray-800">
              {item.title}
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              {item.description}
            </p>
          </div>

          {/* Bottom Section */}
          <div className="flex justify-between items-center mt-5">

            {/* Tags */}
            <div className="flex flex-wrap gap-1">
              {item.tags?.map((tag, i) => (
                <span
                  key={i}
                  className="text-[10px] px-2 py-1 bg-gray-100 rounded-md text-gray-500"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <span className="text-sm text-indigo-500 font-medium cursor-pointer hover:underline">
              {item.cta || "View"}
            </span>

          </div>

        </div>
      ))}

    </div>
  );
}