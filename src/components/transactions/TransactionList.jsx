import React, { useState } from 'react';
import { TransactionFilters } from './TransactionFilters';
import { useFinance } from '../../context/FinanceContext';
import { format, parseISO } from 'date-fns';
import { Plus, Trash2, Edit2 } from 'lucide-react';
import { Modal } from '../ui/Modal';

export const TransactionList = () => {
  const { filteredTransactions, role, addTransaction, deleteTransaction, updateTransaction } = useFinance();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const [formData, setFormData] = useState({
    amount: '',
    category: '',
    type: 'expense',
    date: new Date().toISOString().split('T')[0],
  });

  const openModal = (item = null) => {
    if (item) {
      setEditingItem(item);
      setFormData({ ...item, date: item.date.split('T')[0] });
    } else {
      setEditingItem(null);
      setFormData({ amount: '', category: '', type: 'expense', date: new Date().toISOString().split('T')[0] });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      amount: parseFloat(formData.amount),
      date: new Date(formData.date).toISOString(),
    };
    editingItem ? updateTransaction({ ...editingItem, ...payload }) : addTransaction(payload);
    setIsModalOpen(false);
  };

  return (
    <div className="p-4">

      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-lg font-semibold text-gray-700">Transactions</h2>

        {role === 'ADMIN' && (
          <button
            onClick={() => openModal()}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-400 text-white text-sm hover:bg-indigo-300"
          >
            <Plus className="w-4 h-4" /> Add
          </button>
        )}
      </div>

      {/* Filters */}
      <TransactionFilters />

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">

        {filteredTransactions.length === 0 ? (
          <p className="text-gray-400 text-sm col-span-full text-center">
            No transactions found
          </p>
        ) : (
          filteredTransactions.map((t) => (
            <div
              key={t.id}
              className={`p-4 rounded-xl border shadow-sm transition hover:shadow-md
                ${t.type === 'income'
                  ? 'bg-green-50 border-green-100'
                  : 'bg-red-50 border-red-100'
                }`}
            >

              {/* Top */}
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium text-gray-700">{t.category}</p>

                <span className={`text-xs px-2 py-0.5 rounded-full
                  ${t.type === 'income'
                    ? 'bg-green-200 text-green-700'
                    : 'bg-red-200 text-red-700'
                  }`}
                >
                  {t.type}
                </span>
              </div>

              {/* Amount */}
              <p className={`mt-2 text-lg font-semibold
                ${t.type === 'income' ? 'text-green-600' : 'text-red-500'}
              `}>
                {t.type === 'income' ? '+' : '-'}₹{t.amount}
              </p>

              {/* Date */}
              <p className="text-xs text-gray-400 mt-1">
                {format(parseISO(t.date), 'MMM dd, yyyy')}
              </p>

              {/* Actions */}
              {role === 'ADMIN' && (
                <div className="flex justify-end gap-3 mt-3 text-gray-400">
                  <button onClick={() => openModal(t)} className="hover:text-blue-500">
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button onClick={() => deleteTransaction(t.id)} className="hover:text-red-500">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              )}

            </div>
          ))
        )}

      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={editingItem ? 'Edit' : 'Add'}>
        <form onSubmit={handleSubmit} className="space-y-3">

          <select className="w-full rounded-lg border px-3 py-2 text-sm"
            value={formData.type}
            onChange={e => setFormData({ ...formData, type: e.target.value })}
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>

          <input type="text" placeholder="Category" required
            className="w-full rounded-lg border px-3 py-2 text-sm"
            value={formData.category}
            onChange={e => setFormData({ ...formData, category: e.target.value })}
          />

          <input type="number" placeholder="Amount" required
            className="w-full rounded-lg border px-3 py-2 text-sm"
            value={formData.amount}
            onChange={e => setFormData({ ...formData, amount: e.target.value })}
          />

          <input type="date" required
            className="w-full rounded-lg border px-3 py-2 text-sm"
            value={formData.date}
            onChange={e => setFormData({ ...formData, date: e.target.value })}
          />

          <button className="w-full py-2 rounded-lg bg-indigo-400 text-white text-sm hover:bg-indigo-300">
            {editingItem ? 'Save' : 'Add Transaction'}
          </button>

        </form>
      </Modal>

    </div>
  );
};






