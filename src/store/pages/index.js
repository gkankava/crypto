import create from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
  aboutPage: "",
  setAboutPage: (content) => {
    set(() => ({ aboutPage: content }));
  },
  legalPage: "",
  setAboutPage: (content) => {
    set(() => ({ aboutPage: content }));
  },
  termsPage: "",
  setTermsPage: (content) => {
    set(() => ({ termsPage: content }));
  },
  refundPage: "",
  setRefundPage: (content) => {
    set(() => ({ refundPage: content }));
  },
  faqPage: "",
  setFaqPage: (content) => {
    set(() => ({ faqPage: content }));
  },
});

export const pagesProvider = create(devtools(store));
