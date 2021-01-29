import { Employee } from './Employee';
import { MonthDay } from './Clock';

export interface EmployeeRepository {
  findByBirthday(birthDay: MonthDay): Employee[]
}
