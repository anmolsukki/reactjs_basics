const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    
// For If Statement

// if (action.type === 'INCREMENT') {
//         return {
//             counter: state.counter + 1
//         }
//     }
//     else if (action.type === 'DECREMENT') {
//         return {
//             counter : state.counter - 1
//         }
//     }
//     else if (action.type === 'ADD') {
//         return {
//             counter: state.counter + action.val
//         }
//     }
//     else if (action.type === 'SUB') {
//         return {
//             counter: state.counter - action.val
//         }
//     }


// For Switch Case

switch(action.type) {
    case "INCREMENT" : 
        return {
            counter: state.counter + 1
    }
    case "DECREMENT" : 
        return {
            counter: state.counter - 1
    }
    case "ADD" : 
        return {
            counter: state.counter + action.val
        }
    case "SUB": 
        return {
            counter: state.counter - action.val
        }
    default : 
}

    return state;
};

export default reducer;
