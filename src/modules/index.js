import { combineReducers } from 'redux';

import ui from './ui';
import countries from './countries';
import currencies from './currencies';

export default combineReducers({ ui, countries, currencies });
