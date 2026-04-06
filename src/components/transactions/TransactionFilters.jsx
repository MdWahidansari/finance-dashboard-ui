import React from 'react';
import { useFinance } from '../../context/FinanceContext';

export const TransactionFilters = () => {
  const { searchQuery, setSearchQuery, typeFilter, setTypeFilter } = useFinance();

  return (
    <div className="mb-6">

      {/* Search underline style - very different look */}
      <input
        type="text"
        placeholder="Search transactions..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full bg-transparent border-b border-gray-300 focus:border-black outline-none py-2 text-sm text-gray-700 placeholder-gray-400 transition-all"
      />

      {/* Filter Chips */}
      <div className="flex gap-2 mt-3">

        <button
          onClick={() => setTypeFilter('all')}
          className={`px-4 py-1 text-sm rounded-full transition-all 
            ${typeFilter === 'all' 
              ? 'bg-black text-white shadow-sm' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
        >
          All
        </button>

        <button
          onClick={() => setTypeFilter('income')}
          className={`px-4 py-1 text-sm rounded-full transition-all 
            ${typeFilter === 'income' 
              ? 'bg-green-500 text-white shadow-sm' 
              : 'bg-green-50 text-green-600 hover:bg-green-100'}`}
        >
          Income
        </button>

        <button
          onClick={() => setTypeFilter('expense')}
          className={`px-4 py-1 text-sm rounded-full transition-all 
            ${typeFilter === 'expense' 
              ? 'bg-red-500 text-white shadow-sm' 
              : 'bg-red-50 text-red-600 hover:bg-red-100'}`}
        >
          Expense
        </button>

      </div>

    </div>
  );
};