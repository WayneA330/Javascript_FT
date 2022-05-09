const reducer = (state, action) => {
    let new_value;

    switch(action.type) {
        case 'AGE_UP':
            new_value = action.value + 1

            return {
                ...state,
                age: new_value
            }
        case 'AGE_DOWN':
            new_value = action.value - 1

            return {
                ...state,
                age: new_value
            }
        default:
            return state;
    }
}

export { reducer };