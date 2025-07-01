import { Transaction, Budget } from '../types';

export const CATEGORIES = [
  'Food & Dining',
  'Shopping',
  'Transportation',
  'Entertainment',
  'Bills & Utilities',
  'Healthcare',
  'Education',
  'Travel',
  'Income',
  'Other'
];

export const CATEGORY_COLORS = {
  'Food & Dining': '#EF4444',
  'Shopping': '#F97316',
  'Transportation': '#EAB308',
  'Entertainment': '#22C55E',
  'Bills & Utilities': '#3B82F6',
  'Healthcare': '#8B5CF6',
  'Education': '#EC4899',
  'Travel': '#06B6D4',
  'Income': '#10B981',
  'Other': '#6B7280'
};

export const generateSampleData = (): Transaction[] => [
  {
    id: '1',
    title: 'Salary',
    amount: 5000,
    category: 'Income',
    type: 'income',
    date: '2024-01-01',
    description: 'Monthly salary'
  },
  {
    id: '2',
    title: 'Grocery Shopping',
    amount: 150,
    category: 'Food & Dining',
    type: 'expense',
    date: '2024-01-02',
    description: 'Weekly groceries'
  },
  {
    id: '3',
    title: 'Gas Station',
    amount: 60,
    category: 'Transportation',
    type: 'expense',
    date: '2024-01-03',
    description: 'Fuel for car'
  },
  {
    id: '4',
    title: 'Movie Tickets',
    amount: 25,
    category: 'Entertainment',
    type: 'expense',
    date: '2024-01-04',
    description: 'Weekend movie'
  },
  {
    id: '5',
    title: 'Electricity Bill',
    amount: 120,
    category: 'Bills & Utilities',
    type: 'expense',
    date: '2024-01-05',
    description: 'Monthly electricity'
  }
];

export const generateSampleBudgets = (): Budget[] => [
  {
    id: '1',
    category: 'Food & Dining',
    amount: 500,
    spent: 150,
    period: 'monthly'
  },
  {
    id: '2',
    category: 'Transportation',
    amount: 200,
    spent: 60,
    period: 'monthly'
  },
  {
    id: '3',
    category: 'Entertainment',
    amount: 100,
    spent: 25,
    period: 'monthly'
  },
  {
    id: '4',
    category: 'Bills & Utilities',
    amount: 300,
    spent: 120,
    period: 'monthly'
  }
];