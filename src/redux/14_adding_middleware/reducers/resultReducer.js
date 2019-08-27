import * as actionType from "../actions/actions";

const initialState = {
    result: []
}

const resultReducer = (state = initialState, action) => {
    
switch(action.type) {
    case actionType.STORE_RESULT :
        return {
            ...state,
            result: state.result.concat({id: new Date(), value: action.resultPrint})
        }
        case actionType.DELETE_RESULT :
            const updatedArray = state.result.filter(results => results.id !== action.resultElId);
            return {
                ...state,
                result: updatedArray
                
            }
    default : 
}

    return state;
};

export default resultReducer;
