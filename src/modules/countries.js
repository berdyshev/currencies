//#region Action Types
export const COUNTRIES_LOAD_REQUEST = 'COUNTRIES_LOAD_REQUEST';
export const COUNTRIES_LOAD_SUCCESS = 'COUNTRIES_LOAD_SUCCESS';
export const COUNTRIES_LOAD_FAILURE = 'COUNTRIES_LOAD_FAILURE';
export const COUNTRIES_SELECT = 'COUNTRIES_SELECT';
//#endregion

//#region Actions
export const selectCountry = countryId => ({
  type: COUNTRIES_SELECT,
  payload: countryId
});
//#endregion

//#region Reducer
export const initialState = {
  items: [],
  selectedCountry: ''
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

    case COUNTRIES_SELECT:
      return {
        ...state,
        selectedCountry: payload
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
export const getCountriesOptions = state =>
  state.countries.items.map(({ id, name }) => ({ value: id, label: name }));
export const getSelectedCountry = state => state.countries.selectedCountry;
export const getSelectedCountryCurrency = state => {
  const countries = getCountries(state);
  const selectedCountry = getSelectedCountry(state);
  if (selectedCountry) {
    const country = countries.find(c => c.id === selectedCountry);
    return country ? country.currencyId : null;
  }
  return null;
};
//endregion
