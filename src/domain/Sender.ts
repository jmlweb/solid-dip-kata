import { Notification } from './Notification';

export interface Sender {
  send(notification: Notification): void;
}
