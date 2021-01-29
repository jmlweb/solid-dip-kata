export interface Meta {
  [key: string]: unknown;
}

export interface Notification {
  recipient: string;
  message: string;
  meta: Meta;
}
