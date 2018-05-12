import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import counterReducer from '../reducers/counter';

const reducers = combineReducers({
  counter: counterReducer
});

const loggerMiddleWare = createLogger();
const createStoreWithMiddleware = applyMiddleware(
  loggerMiddleWare)(createStore);

  
const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, reducers)


export const store = createStoreWithMiddleware(persistedReducer);
export const persistor = persistStore(store);