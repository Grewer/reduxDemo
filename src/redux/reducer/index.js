import { combineReducers } from 'redux'
const countReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT': return state + action.data;
        case 'DECREMENT': return state - action.data;
        default: return state;
    }
};
//end

const calcul = combineReducers({
    countReducer
});

export default calcul;