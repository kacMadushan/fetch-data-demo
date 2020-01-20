import React, { Fragment } from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import Root from './root/Root';
import 'bootstrap/dist/css/bootstrap.css';
import { GlobalStyle } from './styles/global';

// Configure store
const store = configureStore();

render(
    <Fragment>
        <GlobalStyle />
        <Root store={store} />
    </Fragment>,
    document.getElementById('root')
);