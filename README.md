# 💰 Finance Dashboard UI — Frontend Internship Project

## 🚀 Live Project
[View Demo](https://finance-dashboard-flame-psi.vercel.app/)  

---

Welcome to the **Finance Dashboard UI**, a **highly interactive and visually polished financial tracking application** built with **modern React**.  

This project was developed as part of a **frontend internship assessment** and demonstrates:

- **Production-ready coding practices**  
- **Advanced state management**  
- **Responsive, analytics-driven dashboards**  

It showcases a **professional, maintainable, and interactive frontend** suitable for real-world financial applications.


## 🎯 Overview of Approach

This project delivers a **premium, interactive finance dashboard** with a focus on **performance, responsive design, and smooth user experience**. Key highlights of the implementation include:

- **🎨 Custom UI Architecture**
  - Built entirely with **Tailwind CSS v4**  
  - Responsive card grids, layered hover effects, frosted backdrops, and animated components  

- **🔄 State Management**
  - Managed using **React Context** (`FinanceContext.jsx`)  
  - Handles transactions, filtered views, role-based permissions, and theme toggling  

- **🖥 Mock Backend Simulation**
  - Artificial API latency to simulate real-world backend operations  
  - Enables smooth loading indicators and realistic data interactions  

- **✨ Cinematic Animations**
  - **Framer Motion** used for staggered entrance effects, scroll-triggered animations, and spring-based numeric transitions  

This approach ensures a **clean, maintainable codebase** while delivering a **professional, production-ready dashboard experience**.


### 🔐 Core Features

- **🛡 Role-Based Access Control**
  - **Admin**: Full CRUD on transactions (Add, Update, Delete), can export data as `.json`.  
  - **Viewer**: Read-only access, restricted editing and data export.  
  - UI dynamically updates based on user role.

- **📐 Responsive Dashboard Layout**
  - BentoGrid-inspired, layered UI built with **Tailwind CSS**.  
  - Animated cards and charts for **income, expenses, and balance**.  
  - Smooth hover effects, interactive filtering, and real-time updates.

- **📊 Transaction & Analytics Insights**
  - **Balance Overview** (`BalanceOverview.jsx`): Tracks daily balance with animated charts.  
  - **Category Analytics** (`CategoryChart.jsx`): Shows income/expense distribution per category.  
  - **Transaction Table** (`TransactionLedger.jsx`): Dynamic and filterable.  
  - **Filters & Search** (`TransactionFilters.jsx`): Filter by type (income/expense/all) and search by category.  
  - **Export Data**: Download transactions in `.json` format.

- **🎨 Theme & UI Customization**
  - Dark & Light mode toggle, synced with OS preferences.  
  - Smooth transitions for a polished UX.  

- **⚡ Loading & Error Handling**
  - **Loader Component** (`LoadingScreen.jsx`): Smooth spinners during data fetching.  
  - **Error Boundary** (`ErrorHandler.jsx`): Catches component errors and prevents app crash.




## 🛠 2. Tech Stack

- ⚛️ **React 18 (Vite)** – Modern frontend framework for fast and reactive UI  
- 🎨 **Tailwind CSS v4** – Responsive, utility-first CSS for custom styling  
- ✨ **Framer Motion** – Smooth animations and interactive UI effects  
- 📊 **Recharts** – Dynamic and interactive data visualization charts  
- 📅 **date-fns** – Date formatting and manipulation library  
- 🖋 **Lucide React** – Vector icons for consistent UI design  
- 🔄 **React Context API** – State management for transactions, filters, and themes


### 🔐 Role-Based Dashboard Authorization (Admin vs Viewer)

- **🔄 Dynamic Permissions System**  
  - Persistent, mock-authenticated state that adjusts the UI based on user roles.

- **🛡 Admin Privileges**  
  - Full CRUD (Create, Read, Update, Delete) access on the transaction ledger.  
  - Manages localized datastore logic and exports the live table to clean `.json` files.

- **👀 Viewer Restrictions**  
  - Read-only state, preventing edits, deletions, and bulk downloads.  
  - Maintains analytics tracking access accurately.
## 📦 4.Local Setup Instructions

Ensure you have Node.js installed, then run the following command sequence in the root of the cloned directory to test the assessment environment:

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```



3. **Launch the Project**  
- Open your browser and navigate to the local address provided by Vite (typically `http://localhost:5173`)  
- Interact with the frontend dynamically and explore all features

---

## 💡 Notes
- All data is persisted in **localStorage** to maintain state across sessions  
- The **mock API simulation** allows for realistic loading and update animations  
- Component architecture is fully **modular**, making it easy to extend features or replace charts, filters, or layout components  

---

## 📌 Future Enhancements
- Integrate **user authentication & backend** for real-world usage  
- Export charts as **images or PDFs**  
- Add **multi-currency support** and advanced financial insights  
- Implement **notifications and alerts** for expense thresholds  

---

## ⚡ Quick Preview (Production Build)
Alternatively, you can test the **production-ready build instantly** without running local dependencies directly at your deployed URL.

---

## ✅ Summary
Developed as a **frontend internship project**, following **modern best practices, performance-first design, and responsive UI principles**.  

This project showcases **production-ready React development**, clean architecture, and a polished user interface suitable for **HR review or portfolio demonstration**.