export interface MonthDay {
  day: number;
  month: number;
}

export interface Clock {
  getMonthDay(): MonthDay;
}
