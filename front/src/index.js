import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';

const reducers = combineReducers({
    field: () => ({ value: 'opa' })
})

ReactDOM.render(
    <Router>
        <Provider store={createStore(reducers)}>
            <App />
        </Provider>
    </Router>
    , document.getElementById('root'));
