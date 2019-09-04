import * as actionTypes from "./actionTypes/actionTypes";

export const saveResult = (res) => {
    return {
        type: actionTypes.STORE_RESULT,
        resultPrint: res
    };
}

export const storeResult = (res) => {
    return dispatch => {
        setTimeout( () => {
            dispatch(saveResult(res));
        }, 2000 );
    }
};

export const deleteResult = (delId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: delId
    };
}