import React, { useMemo, useState } from 'react';
import { Card } from '../ui/Card';
import { useFinance } from '../../context/FinanceContext';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const COLORS = ['#3b82f6', '#8b5cf6', '#ec4899', '#f43f5e', '#f59e0b', '#10b981', '#06b6d4'];

export const SpendingBreakdown = () => {
  const { transactions, theme } = useFinance();
  const [activeIndex, setActiveIndex] = useState(null);

  const data = useMemo(() => {
    const expenses = transactions.filter(t => t.type === 'expense');
    const grouped = expenses.reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount;
      return acc;
    }, {});
    
    return Object.keys(grouped)
      .map(key => ({ name: key, value: grouped[key] }))
      .sort((a, b) => b.value - a.value);
  }, [transactions]);

  if (data.length === 0) return null;

  return (
    <Card className="p-6 h-[360px] flex flex-col bg-gradient-to-b from-white/90 to-gray-50 dark:from-neutral-900/90 dark:to-neutral-950/70 shadow-xl rounded-2xl">
      <h3 className="text-sm font-semibold text-gray-700 dark:text-neutral-400 mb-4">Spending by Category</h3>
      <div className="flex-1 w-full flex items-center justify-center gap-6">
        <ResponsiveContainer width="60%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={50}
              outerRadius={90}
              paddingAngle={3}
              onMouseEnter={(_, index) => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              stroke="none"
            >
              {data.map((entry, index) => {
                const gradientId = `grad-${index}`;
                return (
                  <Cell key={index} fill={`url(#${gradientId})`} />
                );
              })}
              {data.map((entry, index) => (
                <defs key={`def-${index}`}>
                  <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={COLORS[index % COLORS.length]} stopOpacity={0.8}/>
                    <stop offset="100%" stopColor={COLORS[index % COLORS.length]} stopOpacity={0.4}/>
                  </linearGradient>
                </defs>
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{
                backgroundColor: theme === 'dark' ? '#1f1f1f' : '#fff',
                border: 'none',
                borderRadius: '10px',
                padding: '8px',
                boxShadow: theme === 'dark' ? '0 2px 12px #00000060' : '0 2px 12px #00000020',
              }}
              formatter={(value) => `$${value.toLocaleString()}`}
            />
          </PieChart>
        </ResponsiveContainer>

        <div className="flex flex-col gap-2 w-1/3">
          {data.map((entry, index) => (
            <div key={index} className="flex items-center gap-2">
              <span 
                className="w-4 h-4 rounded-full" 
                style={{ background: `linear-gradient(135deg, ${COLORS[index % COLORS.length]}80, ${COLORS[index % COLORS.length]}40)` }}
              ></span>
              <span className="text-sm text-gray-700 dark:text-neutral-300 font-medium">{entry.name} (${entry.value.toLocaleString()})</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};






