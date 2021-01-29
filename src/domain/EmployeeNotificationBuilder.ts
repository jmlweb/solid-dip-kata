import { Employee } from './Employee';
import { Notification, Meta } from './Notification';

interface E2S {
  (employee: Employee): string;
}

interface E2M {
  (employee: Employee): Meta
}

export class EmployeeNotificationBuilder {
  private recipientBuilder: E2S;
  private messageBuilder: E2S;
  private metaBuilder: E2M;

  constructor(recipientBuilder: E2S, messageBuilder: E2S, metaBuilder: E2M) {
    this.recipientBuilder = recipientBuilder;
    this.messageBuilder = messageBuilder;
    this.metaBuilder = metaBuilder;
  }
  build(employee: Employee): Notification {
    const recipient = this.recipientBuilder(employee);
    const message = this.messageBuilder(employee);
    const meta = this.metaBuilder(employee);
    return {
      recipient,
      message,
      meta,
    }
  }
}
