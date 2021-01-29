import { Sender } from '../domain/Sender';
import { Notification } from '../domain/Notification';

export class ConsoleSender implements Sender {
  send(notification: Notification) {
    console.log(notification);
  }
}
