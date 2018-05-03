import { combineReducers } from 'redux';

//#region Reducers
const initialLoadersState = {};
const loaders = (state = initialLoadersState, { type }) => {
  const parts = type.split('_');
  const phase = parts[parts.length - 1];

  switch (phase) {
    case 'REQUEST':
      return { ...state, [parts[0]]: true };

    case 'SUCCESS':
    case 'FAILURE':
      return { ...state, [parts[0]]: false };

    default:
      return state;
  }
};

const initialErrorState = {};
const errors = (state = initialErrorState, { type, payload }) => {
  const parts = type.split('_');
  const phase = parts[parts.length - 1];

  switch (phase) {
    case 'REQUEST':
    case 'SUCCESS':
      return { ...state, [parts[0]]: '' };

    case 'FAILURE':
      return { ...state, [parts[0]]: payload };

    default:
      return state;
  }
};

export default combineReducers({ loaders, errors });
//#endregion

//#region Selectors
export const isDataLoaded = state =>
  !!Object.values(state.ui.loaders).length &&
  !Object.values(state.ui.loaders).some(loader => loader);
//#endregion
