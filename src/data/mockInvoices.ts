import { Invoice } from '../types/invoice';

export const mockInvoices: Invoice[] = [
  {
    id: '1',
    amount: 1500.00,
    dueDate: '2024-03-25',
    status: 'overdue',
    recipient: {
      name: 'John Smith',
      email: 'john.smith@example.com',
      company: 'Tech Solutions Inc.'
    },
    invoiceNumber: 'INV-2024-001',
    createdAt: '2024-02-25'
  },
  {
    id: '2',
    amount: 2300.50,
    dueDate: '2024-04-01',
    status: 'pending',
    recipient: {
      name: 'Sarah Johnson',
      email: 'sarah.j@example.com',
      company: 'Digital Dynamics LLC'
    },
    invoiceNumber: 'INV-2024-002',
    createdAt: '2024-03-01'
  },
  {
    id: '3',
    amount: 950.75,
    dueDate: '2024-03-15',
    status: 'paid',
    recipient: {
      name: 'Michael Brown',
      email: 'michael.b@example.com',
      company: 'Creative Studios Co.'
    },
    invoiceNumber: 'INV-2024-003',
    createdAt: '2024-02-15'
  }
];