import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './currencies.css';

import {
  getCountriesOptions,
  selectCountry,
  getSelectedCountry
} from '../modules/countries';
import {
  getCurrenciesOptions,
  getSelectedCurrency,
  selectCurrency
} from '../modules/currencies';

export class Currencies extends PureComponent {
  static propTypes = {
    currencies: PropTypes.array.isRequired,
    countries: PropTypes.array.isRequired,
    selectedCountry: PropTypes.string,
    selectedCurrency: PropTypes.string,
    selectCountry: PropTypes.func.isRequired,
    selectCurrency: PropTypes.func.isRequired
  };

  handleCountryChange = selection =>
    this.props.selectCountry(selection ? selection.value : '');
  handleCurrencyChange = selection =>
    this.props.selectCurrency(selection ? selection.value : '');

  render() {
    const {
      currencies,
      countries,
      selectedCountry,
      selectedCurrency
    } = this.props;

    return (
      <div>
        <div className="form-item">
          <label htmlFor="country">Country</label>
          <Select
            clearable={false}
            name="country"
            value={selectedCountry}
            onChange={this.handleCountryChange}
            options={countries}
          />
        </div>
        <div className="form-item">
          <label htmlFor="currency">Currency</label>
          <Select
            clearable={false}
            name="currency"
            value={selectedCurrency}
            onChange={this.handleCurrencyChange}
            options={currencies}
          />
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    currencies: getCurrenciesOptions(state),
    countries: getCountriesOptions(state),
    selectedCountry: getSelectedCountry(state),
    selectedCurrency: getSelectedCurrency(state)
  }),
  { selectCountry, selectCurrency }
)(Currencies);
