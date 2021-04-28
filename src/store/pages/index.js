import create from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
  aboutPage: "",
  setAboutPage: (content) => {
    set(() => ({ aboutPage: content.page_description }));
  },
  legalPage: "",
  setLegalPage: (content) => {
    set(() => ({ legalPage: content.page_description }));
  },
  termsPage: "",
  setTermsPage: (content) => {
    set(() => ({ termsPage: content.page_description }));
  },
  refundPage: "",
  setRefundPage: (content) => {
    set(() => ({ refundPage: content.page_description }));
  },
  faqPage: [],
  setFaqPage: (content) => {
    set(() => ({ faqPage: content }));
  },
});

export const pagesProvider = create(devtools(store));
