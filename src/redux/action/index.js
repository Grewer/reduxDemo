export function INCREMENT(data){
    return {
        type:'INCREMENT',
        data
    }
}
export function middleINCRENT(data) {
    return (dispatch, getState) => {
        const currentValue = getState();
        if(currentValue.countReducer >=200){
            return false;
        }
        dispatch(INCREMENT(data));
    }
}
export function DECREMENT(data) {
    return {
        type:'DECREMENT',
        data
    }
}