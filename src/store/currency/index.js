import create from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
  currentPrice: {
    eur: {
      buy: 0,
      sell: 0,
    },
    usd: {
      buy: 0,
      sell: 0,
    },
  },
  setCurrentPrice: (eur, usd) => {
    set(() => ({ currentPrice: { eur: eur, usd: usd } }));
  },
});

export const priceProvider = create(devtools(store));
