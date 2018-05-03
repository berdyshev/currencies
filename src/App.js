import React from 'react';
import { connect } from 'react-redux';

import Currencies from './components/Currencies';
import { isDataLoaded } from './modules/ui';

const App = ({ isDataLoaded }) => {
  return (
    <div className="container">
      {!isDataLoaded && <p>Please, wait while data is loading...</p>}
      {!!isDataLoaded && <Currencies />}
    </div>
  );
};

export default connect(state => ({ isDataLoaded: isDataLoaded(state) }))(App);
