import { COUNTRIES_SELECT, selectCountry } from '../modules/countries';
import { CURRENCIES_SELECT, selectCurrency } from '../modules/currencies';

export default ({ dispatch }) => next => action => {
  const result = next(action);

  if (action.type === 'PRELOAD_DATA') {
    const selectedCountry = localStorage.getItem('selectedCountry');
    if (selectedCountry) {
      dispatch(selectCountry(selectedCountry));
    }

    const selectedCurrency = localStorage.getItem('selectedCurrency');
    if (selectedCurrency) {
      dispatch(selectCurrency(selectedCurrency));
    }
  } else if (action.type === COUNTRIES_SELECT) {
    localStorage.setItem('selectedCountry', action.payload);
  } else if (action.type === CURRENCIES_SELECT) {
    localStorage.setItem('selectedCurrency', action.payload);
  }

  return result;
};
