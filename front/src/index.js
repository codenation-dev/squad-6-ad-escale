import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from 'react-redux';
import store from './store'
import './index.css';
import './scss/custom.scss';

import MyRouter from './router';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <MyRouter />
        </Router>
    </Provider>
    , document.getElementById('root')
);
