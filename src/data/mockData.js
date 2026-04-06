
import { subDays } from 'date-fns';

// Helper to generate a random number between min and max
const randomDaysAgo = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const initialTransactions = [
  {
    id: '1',
    date: subDays(new Date(), randomDaysAgo(1, 3)).toISOString(),
    amount: 120.5,
    category: 'Groceries',
    type: 'expense',
  },
  {
    id: '2',
    date: subDays(new Date(), randomDaysAgo(2, 5)).toISOString(),
    amount: 3200,
    category: 'Salary',
    type: 'income',
  },
  {
    id: '3',
    date: subDays(new Date(), randomDaysAgo(3, 7)).toISOString(),
    amount: 50.0,
    category: 'Entertainment',
    type: 'expense',
  },
  {
    id: '4',
    date: subDays(new Date(), randomDaysAgo(4, 10)).toISOString(),
    amount: 85.2,
    category: 'Utilities',
    type: 'expense',
  },
  {
    id: '5',
    date: subDays(new Date(), randomDaysAgo(5, 12)).toISOString(),
    amount: 15.0,
    category: 'Subscriptions',
    type: 'expense',
  },
  {
    id: '6',
    date: subDays(new Date(), randomDaysAgo(6, 15)).toISOString(),
    amount: 500,
    category: 'Freelance',
    type: 'income',
  },
//   {
//     id: '7',
//     date: subDays(new Date(), randomDaysAgo(7, 18)).toISOString(),
//     amount: 250,
//     category: 'Dining',
//     type: 'expense',
//   },
//   {
//     id: '8',
//     date: subDays(new Date(), randomDaysAgo(8, 20)).toISOString(),
//     amount: 1000,
//     category: 'Bonus',
//     type: 'income',
//   },
//   {
//     id: '9',
//     date: subDays(new Date(), randomDaysAgo(10, 22)).toISOString(),
//     amount: 120,
//     category: 'Transport',
//     type: 'expense',
//   },
//   {
//     id: '10',
//     date: subDays(new Date(), randomDaysAgo(15, 30)).toISOString(),
//     amount: 1500,
//     category: 'Rent',
//     type: 'expense',
//   },
];