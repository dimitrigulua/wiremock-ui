import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './globalStyles';
import './editorConfig';
import Root from './Root';
import configureStore from './configureStore';

const { store, persistor } = configureStore();

ReactDOM.render(
    <Root store={store} persistor={persistor} />,
    document.getElementById('root') as HTMLElement
);