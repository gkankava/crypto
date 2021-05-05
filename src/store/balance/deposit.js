import create from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
  deposit: {
    eur: 0,
    btc: 0,
  },
  setDeposit: (value, currency) => {
    set(() => ({
      deposit: {
        isAuthenticated,
        user,
      },
    }));
  },
});
