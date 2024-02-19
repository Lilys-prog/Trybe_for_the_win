const API_TOKEN = import.meta.env.VITE_TOKEN;

const API_URL = `https://v6.exchangerate-api.com/v6/${API_TOKEN}/latest/`;

export const fetchRates = (currency) => {
  return fetch(`${API_URL}${currency}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Moeda inválida');
      }
      return response.json();
    })
    .then((data) => {
      const rates = Object.entries(data.conversion_rates);
      const allRates = rates.map((rate) => ({
        name: rate[0],
        value: rate[1],
      }));
      // allRates é um array de objetos com nome e valor de cada moeda convertida
      return {
        conversionRatesArray: allRates,
        searchedCurrency: data.base_code,
      };
    });
};
