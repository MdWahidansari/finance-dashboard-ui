import React from "react";
import { useFinance } from "../../context/FinanceContext";

export const Navbar = () => {

  const { role, setRole, theme, setTheme } = useFinance();

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-neutral-900/70 border-b border-gray-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-lg font-semibold">💰 Finance Dashboard</h1>

        {/* NAV LINKS */}
        <div className="flex items-center gap-4">

          {/* Scroll to Transactions */}
          <button
            onClick={() => {
              document
                .getElementById("transactions-section")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-sm hover:underline"
          >
            Transactions
          </button>

          {/* ROLE SWITCH */}
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="text-sm px-2 py-1 rounded border dark:bg-neutral-800"
          >
            <option value="VIEWER">Viewer</option>
            <option value="ADMIN">Admin</option>
          </select>

          {/* THEME TOGGLE */}
          <button
            onClick={() =>
              setTheme(theme === "light" ? "dark" : "light")
            }
            className="px-2 py-1 text-sm rounded bg-gray-200 dark:bg-neutral-800"
          >
            {theme === "light" ? "🌙" : "☀"}
          </button>

        </div>
      </div>
    </header>
  );
};