import React from 'react';
import { DollarSign, TrendingUp, TrendingDown, PiggyBank } from 'lucide-react';
import { Header } from './components/Header';
import { MetricCard } from './components/MetricCard';
import { TransactionForm } from './components/TransactionForm';
import { TransactionList } from './components/TransactionList';
import { SpendingChart } from './components/SpendingChart';
import { BudgetTracker } from './components/BudgetTracker';
import { useFinanceData } from './hooks/useFinanceData';

function App() {
  const {
    transactions,
    budgets,
    darkMode,
    addTransaction,
    deleteTransaction,
    addBudget,
    getFinancialSummary,
    toggleDarkMode
  } = useFinanceData();

  const summary = getFinancialSummary();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Header darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Total Balance"
            value={`$${summary.balance.toFixed(2)}`}
            icon={DollarSign}
            color="bg-gradient-to-r from-blue-500 to-blue-600"
            trend={{
              value: `$${summary.monthlyBalance.toFixed(2)} this month`,
              isPositive: summary.monthlyBalance >= 0
            }}
          />
          <MetricCard
            title="Monthly Income"
            value={`$${summary.monthlyIncome.toFixed(2)}`}
            icon={TrendingUp}
            color="bg-gradient-to-r from-green-500 to-green-600"
          />
          <MetricCard
            title="Monthly Expenses"
            value={`$${summary.monthlyExpenses.toFixed(2)}`}
            icon={TrendingDown}
            color="bg-gradient-to-r from-red-500 to-red-600"
          />
          <MetricCard
            title="Savings Rate"
            value={`${summary.monthlyIncome > 0 ? ((summary.monthlyBalance / summary.monthlyIncome) * 100).toFixed(1) : 0}%`}
            icon={PiggyBank}
            color="bg-gradient-to-r from-purple-500 to-purple-600"
          />
        </div>

        {/* Charts */}
        <div className="mb-8">
          <SpendingChart transactions={transactions} />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Transactions */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Transactions
              </h2>
              <TransactionForm onAddTransaction={addTransaction} />
            </div>
            <TransactionList 
              transactions={transactions} 
              onDeleteTransaction={deleteTransaction} 
            />
          </div>

          {/* Budget Tracker */}
          <div>
            <BudgetTracker budgets={budgets} onAddBudget={addBudget} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;