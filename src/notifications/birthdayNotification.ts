import { EmployeeNotificationBuilder } from '../domain/EmployeeNotificationBuilder';

export const birthdayNotification = new EmployeeNotificationBuilder(
  employee => employee.email,
  employee => `Happy birthday, dear ${employee.firstName}!`,
  () => ({
    subject: 'Happy Birthday!',
  })
);
