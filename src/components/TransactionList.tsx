import React from 'react';
import { format } from 'date-fns';
import { Trash2, ArrowUpCircle, ArrowDownCircle } from 'lucide-react';
import { Transaction } from '../types';
import { CATEGORY_COLORS } from '../utils/data';

interface TransactionListProps {
  transactions: Transaction[];
  onDeleteTransaction: (id: string) => void;
}

export const TransactionList: React.FC<TransactionListProps> = ({ 
  transactions, 
  onDeleteTransaction 
}) => {
  const sortedTransactions = [...transactions].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  if (transactions.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center border border-gray-200 dark:border-gray-700">
        <p className="text-gray-500 dark:text-gray-400">No transactions yet. Add your first transaction to get started!</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Recent Transactions
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {transactions.length} transaction{transactions.length !== 1 ? 's' : ''}
        </p>
      </div>
      
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {sortedTransactions.map((transaction) => (
          <div key={transaction.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  {transaction.type === 'income' ? (
                    <ArrowUpCircle className="h-8 w-8 text-green-500" />
                  ) : (
                    <ArrowDownCircle className="h-8 w-8 text-red-500" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {transaction.title}
                  </p>
                  <div className="flex items-center space-x-2">
                    <span
                      className="inline-block w-2 h-2 rounded-full"
                      style={{ backgroundColor: CATEGORY_COLORS[transaction.category] }}
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {transaction.category} • {format(new Date(transaction.date), 'MMM dd, yyyy')}
                    </p>
                  </div>
                  {transaction.description && (
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                      {transaction.description}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className={`text-sm font-semibold ${
                    transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={() => onDeleteTransaction(transaction.id)}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};