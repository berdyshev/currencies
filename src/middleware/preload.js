export default () => next => action => {
  const result = next(action);

  if (action.type === 'PRELOAD_DATA') {
    Promise.all([
      fetch('https://api.pleasepay.co.uk/countries').then(r => r.json()),
      fetch('https://api.pleasepay.co.uk/currencies').then(r => r.json())
    ])
      .then(([{ items: countries }, { items: currencies }]) => {
        console.log(countries, currencies);
      })
      .catch(err => console.warn(err.message));
  }

  return result;
};
