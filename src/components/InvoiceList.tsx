import React, { useState } from 'react';
import { format } from 'date-fns';
import { Invoice } from '../types/invoice';
import { AlertCircle, CheckCircle, Clock } from 'lucide-react';
import { clsx } from 'clsx';
import { ZapierService } from '../services/zapierService';
import { ReminderHistoryComponent } from './ReminderHistory';

interface InvoiceListProps {
  invoices: Invoice[];
  onTriggerReminder: (invoiceId: string) => void;
}

export const InvoiceList: React.FC<InvoiceListProps> = ({ invoices, onTriggerReminder }) => {
  const [expandedInvoice, setExpandedInvoice] = useState<string | null>(null);

  const getStatusIcon = (status: Invoice['status']) => {
    switch (status) {
      case 'paid':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'overdue':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-500" />;
    }
  };

  const getStatusClass = (status: Invoice['status']) => {
    return clsx('px-2 py-1 rounded-full text-sm font-medium', {
      'bg-green-100 text-green-800': status === 'paid',
      'bg-red-100 text-red-800': status === 'overdue',
      'bg-yellow-100 text-yellow-800': status === 'pending',
    });
  };

  const handleRowClick = (invoiceId: string) => {
    setExpandedInvoice(expandedInvoice === invoiceId ? null : invoiceId);
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Invoice Number
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Recipient
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Amount
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Due Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {invoices.map((invoice) => (
            <React.Fragment key={invoice.id}>
              <tr 
                className="cursor-pointer hover:bg-gray-50"
                onClick={() => handleRowClick(invoice.id)}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {invoice.invoiceNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{invoice.recipient.name}</div>
                  <div className="text-sm text-gray-500">{invoice.recipient.company}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  ${invoice.amount.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {format(new Date(invoice.dueDate), 'MMM dd, yyyy')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {getStatusIcon(invoice.status)}
                    <span className={getStatusClass(invoice.status)}>
                      {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {invoice.status === 'overdue' && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onTriggerReminder(invoice.id);
                      }}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Send Reminder
                    </button>
                  )}
                </td>
              </tr>
              {expandedInvoice === invoice.id && (
                <tr>
                  <td colSpan={6} className="px-6 py-4 bg-gray-50">
                    <ReminderHistoryComponent 
                      history={ZapierService.getReminderHistory(invoice.id)} 
                    />
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};