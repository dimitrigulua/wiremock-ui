import * as React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { IApplicationState } from './store';
import configureStore from './configureStore';
import AppContainer from './modules/core/containers/AppContainer';
import { Persistor } from 'redux-persist';

const { persistor } = configureStore();


interface IRootProps {
    store: any;
    persistor: any;
}

class Root extends React.Component<IRootProps> {
    render() {
        const { store } = this.props;

        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <AppContainer />
                </PersistGate>
            </Provider>
        );
    }
}

export default Root;