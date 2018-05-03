import { getSelectedCountryCurrency } from './countries';

//#region Action Types
export const CURRENCIES_LOAD_REQUEST = 'CURRENCIES_LOAD_REQUEST';
export const CURRENCIES_LOAD_SUCCESS = 'CURRENCIES_LOAD_SUCCESS';
export const CURRENCIES_LOAD_FAILURE = 'CURRENCIES_LOAD_FAILURE';
export const CURRENCIES_SELECT = 'CURRENCIES_SELECT';
//#endregion

//#region Actions
export const selectCurrency = currencyId => ({
  type: CURRENCIES_SELECT,
  payload: currencyId
});
//#endregion

//#region Reducer
export const initialState = {
  items: [],
  selectedCurrency: ''
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CURRENCIES_LOAD_SUCCESS:
      return {
        ...state,
        items: payload.map(({ _id, translations }) => ({
          id: _id,
          name: translations.en || ''
        }))
      };

    case CURRENCIES_SELECT:
      return { ...state, selectedCurrency: payload };

    default:
      return state;
  }
};
//#endregion

//#region Selectors
/**
 * Retrieves list of currencies from the store.
 *
 * @param {object} state Redux store's state
 */
export const getCurrencies = state => state.currencies.items;
export const getCurrenciesOptions = state =>
  state.currencies.items.map(({ id, name }) => ({ value: id, label: name }));
export const getSelectedCurrency = state =>
  state.currencies.selectedCurrency || getSelectedCountryCurrency(state);
//#endregion
