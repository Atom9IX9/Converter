import { onMounted, ref } from "vue";
import CurrencyAPI from "@everapi/currencyapi-js";
import axios from "axios";

export function useCurrencies() {
  const API_KEY = "kfPiMjq3VREM3RFoKQg0SK1zXy1giWs1VS1v0v20";
  const data = ref({});
  const currenciesArray = ref([]);
  const getComparedCurrencies = ref(async (base_currency, currencies) => {
    if (base_currency !== "" && currencies !== "") {
      const currencyApi = new CurrencyAPI(API_KEY);
      const response = await currencyApi.latest({
        base_currency,
        currencies,
      });
      data.value = response.data[currencies].value;
    }
  });

  const getCurrencies = ref(async () => {
    const response = await axios.get(
      `https://api.currencyapi.com/v3/currencies?apikey=${API_KEY}`
    );
    currenciesArray.value = response.data.data;
  });

  return {
    data,
    getComparedCurrencies,
    getCurrencies,
    currenciesArray
  };
}
