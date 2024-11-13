import { Store, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import { notificationsMiddleware } from 'edikit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { IApplicationState, rootReducer, rootEpic } from './store';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['core', 'servers', 'mappings'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore(): { store: Store<IApplicationState>; persistor: any } {
    const epicMiddleware = createEpicMiddleware();

    const middlewares = [
        epicMiddleware,
        notificationsMiddleware,
    ];

    const store = createStore(
        persistedReducer,
        composeWithDevTools(
            applyMiddleware(...middlewares)
        )
    );

    epicMiddleware.run(rootEpic);

    const persistor = persistStore(store);

    return { store, persistor };
}