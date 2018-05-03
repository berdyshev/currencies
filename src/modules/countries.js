//#region Action Types
export const COUNTRIES_LOAD_REQUEST = 'COUNTRIES_LOAD_REQUEST';
export const COUNTRIES_LOAD_SUCCESS = 'COUNTRIES_LOAD_SUCCESS';
export const COUNTRIES_LOAD_FAILURE = 'COUNTRIES_LOAD_FAILURE';
//#endregion

//#region Reducer
const initialState = {
  items: []
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case COUNTRIES_LOAD_SUCCESS:
      return {
        ...state,
        items: payload.map(({ _id, translations, preferredCurrency }) => ({
          id: _id,
          currencyId: preferredCurrency.id,
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
 * Retrieve list of countries from the store.
 *
 * @param {object} state Redux store's state.
 */
export const getCountries = state => state.countries.items;
//endregion
