import React, { useState } from 'react';
import { Plus, Target, AlertTriangle } from 'lucide-react';
import { Budget } from '../types';
import { CATEGORIES, CATEGORY_COLORS } from '../utils/data';

interface BudgetTrackerProps {
  budgets: Budget[];
  onAddBudget: (budget: Omit<Budget, 'id' | 'spent'>) => void;
}

export const BudgetTracker: React.FC<BudgetTrackerProps> = ({ budgets, onAddBudget }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    category: '',
    amount: '',
    period: 'monthly' as 'monthly' | 'weekly' | 'yearly'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.category || !formData.amount) return;

    onAddBudget({
      category: formData.category,
      amount: parseFloat(formData.amount),
      period: formData.period
    });

    setFormData({ category: '', amount: '', period: 'monthly' });
    setShowForm(false);
  };

  const getBudgetStatus = (spent: number, amount: number) => {
    const percentage = (spent / amount) * 100;
    if (percentage >= 90) return 'danger';
    if (percentage >= 75) return 'warning';
    return 'good';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Budget Tracker
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Monitor your spending limits
            </p>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-teal-600 text-white px-3 py-2 rounded-lg hover:from-green-600 hover:to-teal-700 transition-all duration-200 text-sm"
          >
            <Plus className="h-4 w-4" />
            <span>Add Budget</span>
          </button>
        </div>
      </div>

      {showForm && (
        <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
                  required
                >
                  <option value="">Select category</option>
                  {CATEGORIES.filter(cat => cat !== 'Income').map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Budget Amount
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Period
                </label>
                <select
                  value={formData.period}
                  onChange={(e) => setFormData({ ...formData, period: e.target.value as any })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
                >
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Yearly</option>
                </select>
              </div>
            </div>
            <div className="flex space-x-3">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors text-sm"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg hover:from-green-600 hover:to-teal-700 transition-all duration-200 text-sm"
              >
                Add Budget
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="p-6">
        {budgets.length === 0 ? (
          <div className="text-center py-8">
            <Target className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400">
              No budgets set yet. Create your first budget to start tracking your spending!
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {budgets.map((budget) => {
              const percentage = (budget.spent / budget.amount) * 100;
              const status = getBudgetStatus(budget.spent, budget.amount);
              
              return (
                <div key={budget.id} className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: CATEGORY_COLORS[budget.category] }}
                      />
                      <span className="font-medium text-gray-900 dark:text-white">
                        {budget.category}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        ({budget.period})
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {status === 'danger' && (
                        <AlertTriangle className="h-4 w-4 text-red-500" />
                      )}
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        ${budget.spent.toFixed(2)} / ${budget.amount.toFixed(2)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${
                        status === 'danger' ? 'bg-red-500' :
                        status === 'warning' ? 'bg-yellow-500' : 'bg-green-500'
                      }`}
                      style={{ width: `${Math.min(percentage, 100)}%` }}
                    />
                  </div>
                  
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {percentage.toFixed(1)}% used
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      ${(budget.amount - budget.spent).toFixed(2)} remaining
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};