import { Clock } from '../domain/Clock';

export class SystemClock implements Clock {
  getMonthDay() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    return {
      day,
      month,
    };
  }
}
