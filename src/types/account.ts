import { Timestamp } from './common/timestamp';

export interface Account extends Timestamp {
  id: string;
  account_username: string;
  account_tag: string;
  account_card_small: string | null;
  account_card_large: string | null;
  account_card_wide: string | null;
}
