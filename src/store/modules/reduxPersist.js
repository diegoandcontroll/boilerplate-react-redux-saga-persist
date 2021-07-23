import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer({
    key: '@Boiler-Plate: ',
    storage,
    whitelist: ['cont'],
  }, reducers);

  return persistedReducers;
};
