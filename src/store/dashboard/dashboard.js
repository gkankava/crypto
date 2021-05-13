import create from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
  dashboardData: null,
  setDashboardData: (data) => {
    set(() => ({ dashboardData: { ...data } }));
  },
});

export const dashboardProvider = create(devtools(store));
