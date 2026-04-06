import React, { useMemo } from "react";
import { useFinance } from "../../context/FinanceContext";
import { TrendingUp, TrendingDown, Star } from "lucide-react";

export const ReportsPanel = () => {
  const { transactions, totalIncome, totalExpenses } = useFinance();

  const insights = useMemo(() => {
    const list = [];

    const balance = totalIncome - totalExpenses;

    // 1️⃣ Cash Flow
    list.push({
      id: 1,
      icon: TrendingUp,
      title: balance >= 0 ? "You’re Saving Money" : "Overspending Alert",
      desc:
        balance >= 0
          ? `Saved $${balance.toLocaleString()} this period`
          : `Overspent by $${Math.abs(balance).toLocaleString()}`,
      bg: "bg-green-500/10 text-green-600 dark:text-green-400",
    });

    // 2️⃣ Top Category
    const expenses = transactions.filter((t) => t.type === "expense");
    if (expenses.length > 0) {
      const grouped = expenses.reduce((acc, t) => {
        acc[t.category] = (acc[t.category] || 0) + t.amount;
        return acc;
      }, {});
      const top = Object.keys(grouped).reduce((a, b) =>
        grouped[a] > grouped[b] ? a : b
      );

      list.push({
        id: 2,
        icon: TrendingDown,
        title: "Highest Spending",
        desc: `${top} ($${grouped[top].toLocaleString()})`,
        bg: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
      });
    }

    // 3️⃣ Largest Transaction
    if (transactions.length > 0) {
      const largest = transactions.reduce((max, t) =>
        t.amount > max.amount ? t : max
      );

      list.push({
        id: 3,
        icon: Star,
        title: "Biggest Transaction",
        desc: `$${largest.amount.toLocaleString()} (${largest.category})`,
        bg: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
      });
    }

    return list;
  }, [transactions, totalIncome, totalExpenses]);

  return (
    <>
      {insights.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.id}
            className="p-5 rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className={`w-10 h-10 flex items-center justify-center rounded-lg mb-3 ${item.bg}`}>
              <Icon className="w-5 h-5" />
            </div>

            <h3 className="text-sm font-semibold mb-1">{item.title}</h3>
            <p className="text-sm text-gray-500 dark:text-neutral-400">
              {item.desc}
            </p>
          </div>
        );
      })}
    </>
  );
};