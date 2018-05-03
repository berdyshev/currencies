import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCountries } from '../modules/countries';
import { getCurrencies } from '../modules/currencies';

class Currencies extends PureComponent {
  static propTypes = {
    currencies: PropTypes.array.isRequired,
    countries: PropTypes.array.isRequired
  };

  render() {
    const { currencies, countries } = this.props;
    return (
      <div>
        <pre>{JSON.stringify(countries)}</pre>
        <pre>{JSON.stringify(currencies)}</pre>
      </div>
    );
  }
}

export default connect(state => ({
  currencies: getCurrencies(state),
  countries: getCountries(state)
}))(Currencies);
