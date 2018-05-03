import {
  COUNTRIES_LOAD_REQUEST,
  COUNTRIES_LOAD_SUCCESS,
  COUNTRIES_LOAD_FAILURE
} from '../modules/countries';
import {
  CURRENCIES_LOAD_REQUEST,
  CURRENCIES_LOAD_SUCCESS,
  CURRENCIES_LOAD_FAILURE
} from '../modules/currencies';

/**
 * Load data by URL and dispatch actions on request success/failure.
 *
 * @param {string} url URL to fetch data from
 * @param {function} dispatch Store's dispatcher
 * @param {Array} actions Array of three async actions.
 */
const loadData = (url, dispatch, [REQUEST, SUCCESS, FAILURE]) => {
  dispatch({ type: REQUEST });
  fetch(url)
    .then(r => r.json())
    .then(({ items }) => dispatch({ type: SUCCESS, payload: items }))
    .catch(error => dispatch({ type: FAILURE, payload: error.message }));
};

/**
 * Middleware to handle side effects of preloading data.
 */
export default ({ dispatch }) => next => action => {
  const result = next(action);

  if (action.type === 'PRELOAD_DATA') {
    loadData('https://api.pleasepay.co.uk/countries', dispatch, [
      COUNTRIES_LOAD_REQUEST,
      COUNTRIES_LOAD_SUCCESS,
      COUNTRIES_LOAD_FAILURE
    ]);

    loadData('https://api.pleasepay.co.uk/currencies', dispatch, [
      CURRENCIES_LOAD_REQUEST,
      CURRENCIES_LOAD_SUCCESS,
      CURRENCIES_LOAD_FAILURE
    ]);
  }

  return result;
};
