import type { ApplePassword } from './types';

export const APPLE_PASSWORDS_CSV_FIELD_MAP = {
  title: 'Title',
  url: 'URL',
  username: 'Username',
  password: 'Password',
  notes: 'Notes',
  otpAuth: 'OTPAuth',
} as const satisfies Record<keyof ApplePassword, string>;
