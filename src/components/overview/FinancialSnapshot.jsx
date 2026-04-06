
import React, { useEffect } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { Card } from "../ui/Card";
import { useFinance } from "../../context/FinanceContext";
import { TrendingUp, TrendingDown, DollarSign } from "lucide-react";

// Animated number component
const AnimatedNumber = ({ value, prefix }) => {
  const spring = useSpring(0, { damping: 20, stiffness: 120 });
  const display = useTransform(
    spring,
    (current) =>
      prefix +
      current.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  );

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return <motion.span>{display}</motion.span>;
};

export const FinancialSnapshot = () => {
  const { totalBalance, totalIncome, totalExpenses } = useFinance();

  const cards = [
    {
      title: "Total Balance",
      amount: totalBalance,
      icon: DollarSign,
      bgColor: "bg-indigo-100",
      iconBg: "bg-indigo-200",
      textColor: "text-indigo-800",
    },
    {
      title: "Total Income",
      amount: totalIncome,
      icon: TrendingUp,
      bgColor: "bg-green-100",
      iconBg: "bg-green-200",
      textColor: "text-green-800",
    },
    {
      title: "Total Expenses",
      amount: totalExpenses,
      icon: TrendingDown,
      bgColor: "bg-pink-100",
      iconBg: "bg-pink-200",
      textColor: "text-pink-800",
    },
  ];

  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card, i) => {
        const Icon = card.icon;
        const val = Math.abs(Number(card.amount) || 0);
        const pfx = Number(card.amount) < 0 ? "-$" : "$";

        return (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className={`relative rounded-2xl shadow-md cursor-pointer transition-transform`}
          >
            {/* Card content */}
            <div
              className={`flex flex-col items-center justify-center space-y-4 p-6 ${card.bgColor} rounded-2xl`}
            >
              <div className={`p-4 rounded-full ${card.iconBg} shadow-sm`}>
                <Icon className={`w-6 h-6 ${card.textColor}`} />
              </div>
              <h3 className={`text-lg font-semibold ${card.textColor}`}>{card.title}</h3>
              <p className={`text-2xl font-bold ${card.textColor}`}>
                <AnimatedNumber value={val} prefix={pfx} />
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};






