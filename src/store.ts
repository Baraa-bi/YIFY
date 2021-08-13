import {applyMiddleware, createStore} from 'redux';
// import AsyncStorage from "@react-native-community/async-storage";
import thunk from 'redux-thunk';
import reducers from './lib/reducers';
import {persistStore, persistReducer} from 'redux-persist';
import logger from 'redux-logger';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const configStore = () => {
  let middleware = [thunk];
  if (__DEV__) middleware.push(logger);
  const middleWares = applyMiddleware(...middleware);
  let store = createStore(persistedReducer, middleWares);
  let persistor = persistStore(store);
  return {store, persistor};
};

export const {store, persistor} = configStore();
