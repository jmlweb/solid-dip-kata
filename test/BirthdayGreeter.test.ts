import { BirthdayGreeter } from '../src';
import { SystemClock } from '../src/infrastructure/SystemClock';
import { EmployeeRepository } from '../src/domain/EmployeeRepository';
import { birthdayNotification } from '../src/notifications/birthdayNotification';
import { Notification } from '../src/domain/Notification';
import { Sender } from '../src/domain/Sender';

class FakeSender implements Sender {
  public notifications: Notification[] = [];
  send(notification: Notification) {
    this.notifications.push(notification);
  }
}

class FakeRepo implements EmployeeRepository {
  findByBirthday() {
    return [
      {
        firstName: 'Jonathan',
        lastName: 'Blaze',
        birthDate: new Date('1956-03-22'),
        email: 'johnny@blaze.com',
      },
    ];
  }
}

const fakeSender = new FakeSender();
const fakeRepo = new FakeRepo();
const systemClock = new SystemClock();

describe('BirthdayGreeter', () => {
  it('works', () => {
    const birthdayGreeter = new BirthdayGreeter(fakeRepo, systemClock);
    birthdayGreeter.sendGreetings(birthdayNotification, fakeSender);
    expect(fakeSender.notifications).toEqual([
      {
        recipient: 'johnny@blaze.com',
        message: 'Happy birthday, dear Jonathan!',
        meta: { subject: 'Happy Birthday!' },
      },
    ]);
  });
});
