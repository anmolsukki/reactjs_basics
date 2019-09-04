import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";

//  For Topic 1
import counterReducer from "../../15_1_adding_middleware/reducers/counterReducer";
import resultReducer from "../../15_2_handling_asynchronous_code/reducers/resultReducer";
const reducer = combineReducers({
    ctrCounter: counterReducer,
    resResult: resultReducer
})

// //  For Topic 2
// import counterReducer from "../reducers/counterReducer";
// import resultReducer from "../reducers/resultReducer";
// const reducer = combineReducers({
//     ctrCounter: counterReducer,
//     resResult: resultReducer
// })

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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(logger, thunk)));

export default store;