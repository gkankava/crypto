import create from "zustand";
import { devtools } from "zustand/middleware";
import { setTokenHeader } from "../../services/api";
const store = (set) => ({
  currentUser: {
    isAuthenticated: false,
    user: null,
  },
  setCurrentUser: (isAuthenticated, user) => {
    set(() => ({
      currentUser: {
        isAuthenticated,
        user,
      },
    }));
  },
});
export const userProvider = create(devtools(store));

export const logout = (cb) => {
  localStorage.clear();
  setTokenHeader(false);
  cb();
};
