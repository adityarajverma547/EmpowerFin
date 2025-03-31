export interface Invoice {
  id: string;
  amount: number;
  dueDate: string;
  status: 'paid' | 'pending' | 'overdue';
  recipient: {
    name: string;
    email: string;
    company: string;
  };
  invoiceNumber: string;
  createdAt: string;
}