import { Invoice } from '../types/invoice';
import { ZapierWebhook, ReminderHistory } from '../types/zapier';

// In a real application, these would be environment variables
const ZAPIER_WEBHOOKS: Record<string, ZapierWebhook> = {
  reminder: {
    url: 'https://hooks.zapier.com/hooks/catch/123/invoice-reminder/',
    event: 'invoice.reminder'
  },
  followup: {
    url: 'https://hooks.zapier.com/hooks/catch/123/invoice-followup/',
    event: 'invoice.followup'
  }
};

export class ZapierService {
  private static reminderHistory: ReminderHistory[] = [];

  static async triggerReminder(invoice: Invoice, attempt: number = 1): Promise<void> {
    const type = attempt === 1 ? 'reminder' : 'followup';
    const webhook = ZAPIER_WEBHOOKS[type];

    try {
      // In a real application, this would be an actual API call
      console.log(`Triggering Zapier webhook for ${type}:`, {
        invoiceId: invoice.id,
        recipient: invoice.recipient,
        amount: invoice.amount,
        dueDate: invoice.dueDate,
        attempt
      });

      // Record the reminder in history
      this.reminderHistory.push({
        invoiceId: invoice.id,
        type,
        sentAt: new Date().toISOString(),
        attempt
      });

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      return Promise.resolve();
    } catch (error) {
      console.error('Failed to trigger Zapier webhook:', error);
      return Promise.reject(error);
    }
  }

  static getReminderHistory(invoiceId: string): ReminderHistory[] {
    return this.reminderHistory.filter(history => history.invoiceId === invoiceId);
  }

  static getLastReminder(invoiceId: string): ReminderHistory | undefined {
    return this.reminderHistory
      .filter(history => history.invoiceId === invoiceId)
      .sort((a, b) => new Date(b.sentAt).getTime() - new Date(a.sentAt).getTime())[0];
  }
}