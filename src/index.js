import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

//  For Topic 1
import counterReducer from "./redux/14_adding_middleware/reducers/counterReducer";
import resultReducer from "./redux/14_adding_middleware/reducers/resultReducer";
const reducer = combineReducers({
    ctrCounter: counterReducer,
    resResult: resultReducer
})

const logger = store => {
    return next => {
        return action => {
            console.log("[Middleware] dispatching", action);
            const result = next(action);
            console.log("[Middleware] next state", store.getState())
            return result;
        }
    }
} 

const store = createStore(reducer, applyMiddleware(logger));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
