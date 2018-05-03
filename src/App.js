import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Currencies from './components/Currencies';
import { isDataLoaded } from './modules/ui';

const App = ({ isDataLoaded }) => {
  return (
    <Fragment>
      {!isDataLoaded && <p>Please, wait while data is loading...</p>}
      {!!isDataLoaded && <Currencies />}
    </Fragment>
  );
};

export default connect(state => ({ isDataLoaded: isDataLoaded(state) }))(App);
