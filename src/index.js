import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// import reducer from './store/14_1_redux_basics/reducer';

// import reducer from "./store/14_2_state_immutablity/14_2_state_immutablity";

import counterReducer from "./store/14_3_combine_reducer/reducers/counterReducer";
import resultReducer from "./store/14_3_combine_reducer/reducers/resultReducer";
const reducer = combineReducers({
    ctrCounter: counterReducer,
    resResult: resultReducer
})

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
