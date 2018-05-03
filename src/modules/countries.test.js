import reducer, {
  initialState,
  selectCountry,
  COUNTRIES_LOAD_SUCCESS
} from './countries';

describe('countries reducer', () => {
  const countries = [
    {
      _id: '58f9f682d86a9551bbffea92',
      translations: { en: 'Austria' },
      preferredCurrency: { id: '58f9f682d86a9551bbffead2', name: 'EUR' }
    },
    {
      _id: '58f9f682d86a9551bbffeaba',
      translations: { en: 'Ukraine' },
      preferredCurrency: { id: '59d7827ce8fb3bd687b6411f', name: 'UAH' }
    }
  ];

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('handle COUNTRIES_LOAD_SUCCESS', () => {
    const nextState = reducer(undefined, {
      type: COUNTRIES_LOAD_SUCCESS,
      payload: countries
    });
    expect(nextState.items.length).toEqual(2);
    expect(nextState.items[0].name).toEqual(countries[0].translations.en);
    expect(nextState.items[0].currencyId).toEqual(
      countries[0].preferredCurrency.id
    );
    expect(nextState.items[0].id).toEqual(countries[0]._id);
  });

  it('set seletected country', () => {
    const nextState = reducer(
      undefined,
      selectCountry('58f9f682d86a9551bbffea92')
    );
    expect(nextState.selectedCountry).toEqual('58f9f682d86a9551bbffea92');
  });
});
