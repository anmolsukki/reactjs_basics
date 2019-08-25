import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

//  For 1
// import reducer from './store/14_1_redux_basics/reducer';

//  For 2
// import reducer from "./store/14_2_state_immutablity/14_2_state_immutablity";

//  For 3
// import counterReducer from "./store/14_3_combine_reducer/reducers/counterReducer";
// import resultReducer from "./store/14_3_combine_reducer/reducers/resultReducer";
// const reducer = combineReducers({
//     ctrCounter: counterReducer,
//     resResult: resultReducer
// })

//  For 4
import reducer from "./store/14_4_assignment_solution/reducer"

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
