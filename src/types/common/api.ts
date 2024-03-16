import { User } from '..';

export interface AuthResponse {
  access_token: string;
  user: User;
}
