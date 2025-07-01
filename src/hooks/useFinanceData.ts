import { useState, useEffect } from 'react';
import { Transaction, Budget, FinancialSummary } from '../types';
import { generateSampleData, generateSampleBudgets } from '../utils/data';

export const useFinanceData = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTransactions = localStorage.getItem('finance-transactions');
    const savedBudgets = localStorage.getItem('finance-budgets');
    const savedDarkMode = localStorage.getItem('finance-darkmode');

    if (savedTransactions) {
      setTransactions(JSON.parse(savedTransactions));
    } else {
      const sampleData = generateSampleData();
      setTransactions(sampleData);
      localStorage.setItem('finance-transactions', JSON.stringify(sampleData));
    }

    if (savedBudgets) {
      setBudgets(JSON.parse(savedBudgets));
    } else {
      const sampleBudgets = generateSampleBudgets();
      setBudgets(sampleBudgets);
      localStorage.setItem('finance-budgets', JSON.stringify(sampleBudgets));
    }

    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const addTransaction = (transaction: Omit<Transaction, 'id'>) => {
    const newTransaction = {
      ...transaction,
      id: Date.now().toString()
    };
    const updatedTransactions = [...transactions, newTransaction];
    setTransactions(updatedTransactions);
    localStorage.setItem('finance-transactions', JSON.stringify(updatedTransactions));
  };

  const deleteTransaction = (id: string) => {
    const updatedTransactions = transactions.filter(t => t.id !== id);
    setTransactions(updatedTransactions);
    localStorage.setItem('finance-transactions', JSON.stringify(updatedTransactions));
  };

  const addBudget = (budget: Omit<Budget, 'id' | 'spent'>) => {
    const spent = transactions
      .filter(t => t.category === budget.category && t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);
    
    const newBudget = {
      ...budget,
      id: Date.now().toString(),
      spent
    };
    const updatedBudgets = [...budgets, newBudget];
    setBudgets(updatedBudgets);
    localStorage.setItem('finance-budgets', JSON.stringify(updatedBudgets));
  };

  const getFinancialSummary = (): FinancialSummary => {
    const totalIncome = transactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);
    
    const totalExpenses = transactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);
    
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    
    const monthlyTransactions = transactions.filter(t => {
      const transactionDate = new Date(t.date);
      return transactionDate.getMonth() === currentMonth && 
             transactionDate.getFullYear() === currentYear;
    });
    
    const monthlyIncome = monthlyTransactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);
    
    const monthlyExpenses = monthlyTransactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);
    
    return {
      totalIncome,
      totalExpenses,
      balance: totalIncome - totalExpenses,
      monthlyIncome,
      monthlyExpenses,
      monthlyBalance: monthlyIncome - monthlyExpenses
    };
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('finance-darkmode', JSON.stringify(newDarkMode));
  };

  return {
    transactions,
    budgets,
    darkMode,
    addTransaction,
    deleteTransaction,
    addBudget,
    getFinancialSummary,
    toggleDarkMode
  };
};