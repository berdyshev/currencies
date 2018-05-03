import reducer, {
  initialState,
  selectCurrency,
  CURRENCIES_LOAD_SUCCESS
} from './currencies';

describe('currencies reducer', () => {
  const currencies = [
    { _id: '58f9f682d86a9551bbffead2', translations: { en: 'EUR' } },
    { _id: '59d7827ce8fb3bd687b6411f', translations: { en: 'UAH' } }
  ];

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('handle CURRENCIES_LOAD_SUCCESS', () => {
    const nextState = reducer(undefined, {
      type: CURRENCIES_LOAD_SUCCESS,
      payload: currencies
    });
    expect(nextState.items.length).toEqual(2);
    expect(nextState.items[0].name).toEqual(currencies[0].translations.en);
    expect(nextState.items[0].id).toEqual(currencies[0]._id);
  });

  it('set seletected currency', () => {
    const nextState = reducer(
      undefined,
      selectCurrency('59d7827ce8fb3bd687b6411f')
    );
    expect(nextState.selectedCurrency).toEqual('59d7827ce8fb3bd687b6411f');
  });
});
