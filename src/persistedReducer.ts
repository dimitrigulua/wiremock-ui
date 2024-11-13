import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { coreReducer } from './modules/core';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['core', 'servers', 'mappings'],
};

const persistedCoreReducer = persistReducer(persistConfig, coreReducer);

export { persistedCoreReducer };