import './style.css';
import { fetchRates } from './utils/api';
import { newConvertedElement } from './utils/newDomLine';

const inputCurrency = document.querySelector('#currency-input');
const btnCurrencySearch = document.querySelector('#btn-search');
const currencyList = document.querySelector('#currency');
const sectionTitle = document.querySelector('#section-title');

btnCurrencySearch.addEventListener('click', (event) => {
  event.preventDefault();

  fetchRates(inputCurrency.value)
    .then((result) => {
      currencyList.innerHTML = ''; // esvazia a lista
      sectionTitle.innerHTML = `Valores referentes a 1 ${result.searchedCurrency}`;

      const currencyListElements = document.createElement('li');
      currencyListElements.className = 'list-group-item';
      currencyListElements.innerHTML = newConvertedElement(result.conversionRatesArray)
        .map((element) => element);
      currencyList.appendChild(currencyListElements);
    });
});
