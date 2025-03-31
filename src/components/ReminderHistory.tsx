import React from 'react';
import { format } from 'date-fns';
import { ReminderHistory } from '../types/zapier';
import { Clock } from 'lucide-react';

interface ReminderHistoryProps {
  history: ReminderHistory[];
}

export const ReminderHistoryComponent: React.FC<ReminderHistoryProps> = ({ history }) => {
  if (history.length === 0) {
    return null;
  }

  return (
    <div className="mt-2">
      <h4 className="text-sm font-medium text-gray-500 mb-2">Reminder History</h4>
      <div className="space-y-2">
        {history.map((record, index) => (
          <div key={index} className="flex items-center text-sm text-gray-600">
            <Clock className="w-4 h-4 mr-2" />
            <span>
              {record.type === 'reminder' ? 'Initial reminder' : `Follow-up #${record.attempt - 1}`}
              {' sent on '}
              {format(new Date(record.sentAt), 'MMM dd, yyyy')}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};