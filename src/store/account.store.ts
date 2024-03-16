import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Account } from '../types';

interface AccountStage {
  account: Account | null;
  setAccount: (account: Account | null) => void;
}

export const useAccountStore = create<AccountStage>()(
  persist(
    (set) => ({
      account: null,
      setAccount: (account: Account | null) => set(() => ({ account })),
    }),
    {
      name: 'selected-account-storage',
    }
  )
);
