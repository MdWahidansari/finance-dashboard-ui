# # Finance Dashboard UI — Internship Frontend Project
 
 ## LIVE PROJECT    👉 **[https://finance-dashboard-flame-psi.vercel.app/](https://finance-dashboard-flame-psi.vercel.app/)**




Welcome to the Finance Dashboard UI, a highly interactive and visually polished financial tracking application built with modern React. This project was developed as part of a frontend internship assessment and demonstrates production-ready coding practices, advanced state management, and responsive analytics dashboards.


# # Overview of Approach
This project delivers a premium, interactive finance dashboard with a focus on performance, responsive design, and smooth user experience.
     **Custom UI Architecture**: Built entirely with Tailwind CSS v4, featuring responsive card grids, layered hover effects, frosted backdrops, and animated components.

     **State Management**: Handled using React Context (FinanceContext.jsx), managing transactions, filtered views, role-based permissions, and theme toggling.

     **Mock Backend Simulation**: Implemented artificial API latency to simulate real-world backend operations, enabling smooth loading indicators and realistic data interactions.

     **Cinematic Animations**: Used Framer Motion for staggered entrance effects, scroll-triggered animations, and spring-based numeric transitions.

This approach ensures a clean, maintainable codebase while delivering a professional, production-ready dashboard experience.




## Core Features
🔐 **Role-Based Access Control**
Admin: Full CRUD access to transactions (Add, Update, Delete), can export data as .json.
Viewer: Read-only access, restricted editing and data export.
Dynamic UI updates based on user role.
💎 **Responsive Dashboard Layout**
BentoGrid-Inspired UI: Fully custom, layered design with Tailwind CSS.
Animated cards and charts for income, expenses, and balance over time.
Smooth hover effects, interactive filtering, and real-time data updates.
📊 **Transaction & Analytics Insights**
Balance Overview: Tracks daily balance with animated charts (BalanceOverview.jsx).
Category Analytics: Shows income/expense distribution per category (CategoryChart.jsx).
Transaction Table: Dynamic and filterable transaction table (TransactionLedger.jsx).
Filters & Search: Filter by type (income/expense/all) and search by category (TransactionFilters.jsx).
Export Data: Download transactions in JSON format.
🌗 **Theme & UI Customization**
Dark & Light Modes: Toggle theme globally, synced with OS preferences.
Smooth transitions between themes.
Polished design for readability and UX consistency.
⚡ **Loading & Error Handling**
Loader Component (AppLoader.jsx): Shows smooth spinners during data fetching.
Error Boundary (ErrorGuard.jsx): Catches component errors and prevents app crash.

## 🛠 Tech Stack
React 18 (Vite)
Tailwind CSS v4 for responsive, custom styling
Framer Motion for animations
Recharts for data visualization
date-fns for formatting dates
Lucide React for vector icons
React Context API for state managment




### 🔐 1. Role-Based Dashboard Authorization (Admin vs Viewer)


* **Dynamic Permissions System**: A persistent, mock-authenticated state layout that shifts UI interfaces based on contextual roles.
* **Admin Privileges**: Unlocks total CRUD (Create, Read, Update, Delete) capability on the global transaction ledger. Fully manages localized datastore logic and grants access to export the live table straight into cleanly formatted `.json` files for external system handoffs.
* **Viewer Restrictions**: Lock-down state natively restricting edit/delete workflows and preventing bulk data downloads cleanly while accurately preserving analytics tracking access.



## 📦 Local Setup Instructions

Ensure you have Node.js installed, then run the following command sequence in the root of the cloned directory to test the assessment environment:

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Launch**: Open your testing browser and navigate to the local address Vite provides in the terminal (typically `http://localhost:5173`) to interact with the frontend dynamically.


## 💡Notes
All data is persisted in localStorage to maintain state across sessions.
The mock API simulation allows for realistic loading and update animations.
Component architecture is fully modular, allowing easy extension of features or replacement of charts, filters, or layout components.
## 📌 Future Enhancements
Add user authentication & backend integration for real-world usage.
Export charts as images/PDFs.
Add multi-currency support and advanced financial insights.
Integrate notifications and alerts for expense thresholds.



Alternatively, you can test the production-ready build instantly without running local dependencies directly at:


## Developed as a frontend project for an internship assessment, following modern best practices, performance-first design, and responsive UI principles.
