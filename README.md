
# Personal Finance Dashboard

A modern, responsive personal finance management application built with React, TypeScript, and Tailwind CSS. Track your expenses, manage budgets, and visualize your financial data with interactive charts and analytics.

![Personal Finance Dashboard](https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=Personal+Finance+Dashboard)

## 🚀 Features

### 💰 Financial Tracking
- **Transaction Management**: Add, view, and delete income/expense transactions
- **Real-time Balance**: Automatic calculation of total balance and monthly summaries
- **Category Organization**: Organize transactions by customizable categories
- **Date-based Filtering**: Track spending patterns over time

### 📊 Data Visualization
- **Interactive Charts**: Pie charts for spending by category, bar charts for monthly overview
- **Budget Tracking**: Visual progress bars showing budget utilization
- **Financial Metrics**: Key performance indicators with trend analysis
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### 🎨 User Experience
- **Dark/Light Mode**: Toggle between themes for comfortable viewing
- **Modern UI**: Clean, professional interface with smooth animations
- **Intuitive Navigation**: Easy-to-use forms and navigation
- **Data Persistence**: Local storage keeps your data safe

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **Build Tool**: Vite
- **Code Quality**: ESLint, TypeScript strict mode

## 📱 Screenshots

### Dashboard Overview
- Summary cards showing total balance, monthly income/expenses, and savings rate
- Interactive charts for spending analysis
- Recent transactions list

### Transaction Management
- Modal form for adding new transactions
- Category-based organization with color coding
- Delete functionality with confirmation

### Budget Tracking
- Visual budget progress indicators
- Category-wise budget allocation
- Spending alerts and warnings

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/iambhavesh55/personal-finance-dashboard.git
cd personal-finance-dashboard
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 💡 Usage

1. **Add Transactions**: Click "Add Transaction" to record income or expenses
2. **Set Budgets**: Use the Budget Tracker to set spending limits by category
3. **View Analytics**: Monitor your spending patterns through interactive charts
4. **Toggle Theme**: Switch between light and dark modes using the header toggle

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # App header with theme toggle
│   ├── MetricCard.tsx  # Financial metric display cards
│   ├── TransactionForm.tsx    # Transaction input form
│   ├── TransactionList.tsx    # Transaction display list
│   ├── SpendingChart.tsx      # Data visualization charts
│   └── BudgetTracker.tsx      # Budget management component
├── hooks/              # Custom React hooks
│   └── useFinanceData.ts      # Financial data management
├── types/              # TypeScript type definitions
│   └── index.ts        # Core data types
├── utils/              # Utility functions and data
│   └── data.ts         # Sample data and constants
└── App.tsx             # Main application component
```

## 🎯 Key Features Implemented

### Data Management
- **Local Storage Integration**: Persistent data storage in browser
- **Sample Data Generation**: Pre-populated demo data for testing
- **CRUD Operations**: Complete create, read, update, delete functionality

### Financial Calculations
- **Real-time Summaries**: Automatic calculation of balances and totals
- **Monthly Analytics**: Current month income/expense tracking
- **Budget Monitoring**: Spending vs. budget comparisons
- **Savings Rate Calculation**: Automatic savings percentage calculation

### User Interface
- **Responsive Design**: Mobile-first approach with breakpoints
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Performance**: Optimized rendering and state management
- **Error Handling**: Graceful handling of edge cases

## 🔮 Future Enhancements

- [ ] Export data to CSV/PDF
- [ ] Multiple account support
- [ ] Recurring transaction templates
- [ ] Advanced filtering and search
- [ ] Goal setting and tracking
- [ ] Bank account integration
- [ ] Multi-currency support
- [ ] Data backup and sync

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Bhavesh Chaudhary**
- GitHub: [@iambhavesh55](https://github.com/iambhavesh55)
- LinkedIn: [Bhavesh Chaudhary](https://linkedin.com/in/bhavesh-chaudhary-3a055a28a/)
- Email: iambhavesh55@gmail.com

## 🙏 Acknowledgments

- Icons provided by [Lucide React](https://lucide.dev/)
- Charts powered by [Recharts](https://recharts.org/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)
- Built with [Vite](https://vitejs.dev/) and [React](https://reactjs.org/)

---

⭐ If you found this project helpful, please give it a star on GitHub!
