import create from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
  authModalState: {
    activeState: false,
    type: null,
  },
  setAuthModalState: (activeState, type = "signin") => {
    set(() => ({
      authModalState: {
        activeState,
        type,
      },
    }));
  },
});

export const modalProvider = create(devtools(store));
