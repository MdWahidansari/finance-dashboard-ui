


import React from 'react';
import { useFinance } from './context/FinanceContext';

import { FinancialSnapshot } from './components/overview/FinancialSnapshot';
import { BalanceOverview } from './components/overview/BalanceOverview';
import { SpendingBreakdown } from './components/overview/SpendingBreakdown';
import { ReportsPanel } from './components/overview/ReportsPanel';


import { TransactionList } from './components/transactions/TransactionList';
import { LoadingScreen } from './components/ui/LoadingScreen';
import { motion } from 'framer-motion';

function DashboardContent() {
  const { isLoading } = useFinance();

  if (isLoading) return <LoadingScreen />;

  const fade = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="space-y-8">

      {/* FinancialSnapshot */}
      <motion.div variants={fade} initial="hidden" animate="show">
        <FinancialSnapshot />
      </motion.div>

      {/* BalanceOverview  */}

      <motion.div variants={fade} initial="hidden" animate="show">
        <div className="bg-white dark:bg-neutral-900 rounded-2xl p-5 shadow-sm border dark:border-neutral-800">
          <h2 className="text-sm font-semibold mb-3">Balance Overview</h2>
          <BalanceOverview />
        </div>
      </motion.div>

      {/* CATEGORY + TRANSACTIONS */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* SpendingBreakdown */}
        <motion.div
          variants={fade}
          initial="hidden"
          animate="show"
          className="xl:col-span-1"
        >
          <SpendingBreakdown/>
        </motion.div>

        {/*  Transactions (ADD ID HERE) */}
        <motion.div
          id="transactions-section"  
          variants={fade}
          initial="hidden"
          animate="show"
          className="xl:col-span-2"
        >
          <div className="bg-white dark:bg-neutral-900 rounded-2xl p-5 shadow-sm border dark:border-neutral-800">
            <h2 className="text-sm font-semibold mb-3">Transactions</h2>
            <TransactionList />
          </div>
        </motion.div>

      </div>

      
      <motion.div variants={fade} initial="hidden" animate="show">
        <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-6 border dark:border-neutral-800">
          
          <h2 className="text-lg font-semibold mb-4">
            💡 Insights at a Glance
          </h2>

         
          <ReportsPanel/>
        </div>
      </motion.div>

    </div>
  );
}

export default DashboardContent;