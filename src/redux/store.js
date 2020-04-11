import {applyMiddleware, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'remote-redux-devtools';
import {rootReducer} from './modules';
import {rootSaga} from './sagas';
import AsyncStorage from '@react-native-community/async-storage';

export const version = -1;

export function configureStore(key = 'primary') {
  const persistConfig = {
    version,
    key,
    storage: AsyncStorage,
    timeout: 10000,
    throttle: 500,
    blacklist: [],
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const composeEnhancers = composeWithDevTools({port: 8000});
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  );

  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  return {store, persistor};
}
