

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { initialTransactions } from '../data/mockData';

const FinanceContext = createContext();

export const useFinance = () => useContext(FinanceContext);

export const FinanceProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMutating, setIsMutating] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [role, setRole] = useState('VIEWER');
  const [theme, setTheme] = useState('light');

  // 🌙 Theme
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  // 📦 Load from localStorage
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      await new Promise(res => setTimeout(res, 800));

      try {
        const saved = localStorage.getItem('finance_transactions');
        setTransactions(saved ? JSON.parse(saved) : initialTransactions);
      } catch {
        setTransactions(initialTransactions);
      }

      setIsLoading(false);
    };

    loadData();
  }, []);

  // 💾 Save to localStorage
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('finance_transactions', JSON.stringify(transactions));
    }
  }, [transactions, isLoading]);

  // 🔍 Filter
  const filteredTransactions = useMemo(() => {
    return transactions
      .filter(t =>
        t.category.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (typeFilter === 'all' || t.type === typeFilter)
      )
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [transactions, searchQuery, typeFilter]);

  // 📊 Summary
  const summary = useMemo(() => {
    return transactions.reduce(
      (acc, t) => {
        if (t.type === 'income') acc.income += t.amount;
        else acc.expense += t.amount;
        return acc;
      },
      { income: 0, expense: 0 }
    );
  }, [transactions]);

  const totalBalance = summary.income - summary.expense;

  // ⚡ Mock API
  const simulateApi = async (callback) => {
    setIsMutating(true);
    await new Promise(res => setTimeout(res, 500));
    callback();
    setIsMutating(false);
  };

  // ➕ Add
  const addTransaction = (data) => {
    simulateApi(() => {
      setTransactions(prev => [
        { ...data, id: Date.now().toString() },
        ...prev
      ]);
    });
  };

  // ✏️ Update
  const updateTransaction = (updated) => {
    simulateApi(() => {
      setTransactions(prev =>
        prev.map(t => (t.id === updated.id ? updated : t))
      );
    });
  };

  // ❌ Delete
  const deleteTransaction = (id) => {
    simulateApi(() => {
      setTransactions(prev => prev.filter(t => t.id !== id));
    });
  };

  // 📤 Export JSON
  const exportData = () => {
    const blob = new Blob([JSON.stringify(transactions, null, 2)], {
      type: 'application/json'
    });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'transactions.json';
    link.click();
  };

  const value = {
    transactions,
    filteredTransactions,

    searchQuery, setSearchQuery,
    typeFilter, setTypeFilter,

    role, setRole,
    theme, setTheme,

    isLoading,
    isMutating,

    totalBalance,
    totalIncome: summary.income,
    totalExpenses: summary.expense,

    addTransaction,
    updateTransaction,
    deleteTransaction,
    exportData
  };

  return (
    <FinanceContext.Provider value={value}>
      {children}
    </FinanceContext.Provider>
  );
};