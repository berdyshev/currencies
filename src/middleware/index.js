import { applyMiddleware } from 'redux';

import preload from './preload';
import storage from './storage';

export default applyMiddleware(preload, storage);
