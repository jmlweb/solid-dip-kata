import { Sender } from './domain/Sender';
import { EmployeeRepository } from './domain/EmployeeRepository';
import { Clock } from './domain/Clock';
import { EmployeeNotificationBuilder } from './domain/EmployeeNotificationBuilder';

export class BirthdayGreeter {
  private employeeRepository: EmployeeRepository;
  private clock: Clock;

  constructor(employeeRepository: EmployeeRepository, clock: Clock) {
    this.employeeRepository = employeeRepository;
    this.clock = clock;
  }

  sendGreetings(
    employeeNotificationBuilder: EmployeeNotificationBuilder,
    sender: Sender
  ) {
    const monthDay = this.clock.getMonthDay();
    const employees = this.employeeRepository.findByBirthday(monthDay);
    const notifications = employees.map(employee =>
      employeeNotificationBuilder.build(employee)
    );
    notifications.forEach(notification => {
      sender.send(notification);
    });
  }
}
