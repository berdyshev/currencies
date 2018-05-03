import React from 'react';
import ReactDOM from 'react-dom';
import { Currencies } from './Currencies';

describe('Currencies component', () => {
  const props = {
    countries: [{ value: 'UA', label: 'Ukraine' }],
    currencies: [{ value: 123, label: 'UAH' }],
    selectCountry: () => {},
    selectCurrency: () => {}
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Currencies {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
