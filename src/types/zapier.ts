export interface ZapierWebhook {
  url: string;
  event: 'invoice.reminder' | 'invoice.followup';
}

export interface ReminderConfig {
  initialDelay: number; // days after due date
  followUpIntervals: number[]; // days between follow-ups
  maxFollowUps: number;
}

export interface ReminderHistory {
  invoiceId: string;
  type: 'reminder' | 'followup';
  sentAt: string;
  attempt: number;
}