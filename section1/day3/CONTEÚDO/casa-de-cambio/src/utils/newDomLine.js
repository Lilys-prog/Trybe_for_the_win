// import { fetchRates } from './api';

export const newConvertedElement = (convertedCurrencyArray) => {
  return convertedCurrencyArray.map((currencyElement) => {
    return `${currencyElement.name}  ${currencyElement.value}`;
  });
};
