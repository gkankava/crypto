import { fetchCurrencyPrice } from "../store/actions/currency";

export const autoUpdateCurrency = (setPrice) => {
  fetchCurrencyPrice(setPrice);
  setInterval(function () {
    fetchCurrencyPrice(setPrice);
  }, 10000);
};
