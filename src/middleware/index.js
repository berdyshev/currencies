import { applyMiddleware } from 'redux';

import preload from './preload';

export default applyMiddleware(preload);
