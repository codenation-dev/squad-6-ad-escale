import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter } from "react-router-dom";

import { Provider } from 'react-redux';
import store from './store'
import './index.css';


import MyRouter from "./router/router";


ReactDOM.render(
    <Router>
        <Provider store={store}>
            <HashRouter>
                <Router>
                    <MyRouter />
                </Router>
            </HashRouter>
        </Provider>

    </Router>
    , document.getElementById('root'));
