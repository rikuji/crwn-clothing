import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootRecucer from './root-reducer';

const middleware = [logger];

const store = createStore(rootRecucer, applyMiddleware(...middleware));

export default store;
