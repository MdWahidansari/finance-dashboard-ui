
import React from 'react';
import { FinanceProvider } from './context/FinanceContext';

import { MainLayout } from './components/overview/MainLayout';
import DashboardContent from './DashboardContent';
import { ErrorHandler } from './components/ui/ErrorHandler';

function App() {
  return (
    <FinanceProvider>
      <MainLayout>
        <ErrorHandler>
          <DashboardContent />
        </ErrorHandler>
      </MainLayout>
    </FinanceProvider>
  );
}

export default App;



