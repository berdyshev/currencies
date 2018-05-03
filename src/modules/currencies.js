//#region Action Types
export const CURRENCIES_LOAD_REQUEST = 'CURRENCIES_LOAD_REQUEST';
export const CURRENCIES_LOAD_SUCCESS = 'CURRENCIES_LOAD_SUCCESS';
export const CURRENCIES_LOAD_FAILURE = 'CURRENCIES_LOAD_FAILURE';
//#endregion

//#region Reducer
const initialState = {
  items: []
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
//#endregion
