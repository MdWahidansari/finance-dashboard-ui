import React, { useMemo } from 'react';
import { Card } from '../ui/Card';
import { useFinance } from '../../context/FinanceContext';
import { LineChart, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { format, parseISO } from 'date-fns';


export const BalanceOverview = () => {
  const { transactions, theme } = useFinance();

  // Prepare chart data
  const chartData = useMemo(() => {
    const daily = transactions.reduce((acc, t) => {
      const day = format(parseISO(t.date), 'MMM dd');
      if (!acc[day]) acc[day] = { date: day, income: 0, expense: 0, balance: 0 };
      if (t.type === 'income') acc[day].income += t.amount;
      if (t.type === 'expense') acc[day].expense += t.amount;
      return acc;
    }, {});

    const sorted = Object.values(daily).sort((a, b) => new Date(a.date) - new Date(b.date));
    let balance = 0;
    return sorted.map(d => {
      balance += d.income - d.expense;
      return { ...d, balance };
    });
  }, [transactions]);

  if (!transactions.length) return null;

  return (
    <Card className="p-6 h-[360px] flex flex-col bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-900 dark:to-gray-800">
      <h3 className="text-base font-semibold text-purple-700 dark:text-purple-300 mb-3">Your Balance Over Time</h3>

      <div className="flex-1 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 10, right: 20, bottom: 10, left: -10 }}>
            <CartesianGrid 
              strokeDasharray="4 4" 
              stroke={theme === 'dark' ? '#2a2a2a' : '#e0d7f3'} 
            />
            <XAxis 
              dataKey="date" 
              stroke={theme === 'dark' ? '#b3b3b3' : '#7e22ce'} 
              fontSize={12} 
              tickLine={false} 
              axisLine={false} 
            />
            <YAxis 
              stroke={theme === 'dark' ? '#b3b3b3' : '#7e22ce'} 
              tickFormatter={(val) => `$${val}`} 
              fontSize={12} 
              tickLine={false} 
              axisLine={false} 
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: theme === 'dark' ? '#1f1f1f' : '#f8f5ff',
                borderColor: theme === 'dark' ? '#444' : '#ddd6fe',
                borderRadius: '10px',
                color: theme === 'dark' ? '#fff' : '#111827'
              }}
              itemStyle={{ color: theme === 'dark' ? '#fff' : '#4c1d95' }}
            />

            <Area 
              type="monotone" 
              dataKey="balance" 
              stroke="#a78bfa" 
              fill="url(#balanceGradient)" 
              strokeWidth={3} 
              dot={{ r: 4, stroke: '#7c3aed', strokeWidth: 2, fill: '#d8b4fe' }} 
            />

            <defs>
              <linearGradient id="balanceGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#a78bfa" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#a78bfa" stopOpacity={0} />
              </linearGradient>
            </defs>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};