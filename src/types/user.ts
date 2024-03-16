import { Account } from '.';
import { UserPreferences } from './user-preferences';

export interface User {
  id: number;
  username: string;
  email: string;
  is_email_confirmed: boolean;
  accounts: Account[];
  preferences?: UserPreferences;
}
