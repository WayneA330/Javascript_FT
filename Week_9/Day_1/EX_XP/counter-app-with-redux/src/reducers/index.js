const reducer = (state, action) => {
    let new_value;

    switch (action.type) {
        case "ADD":
            new_value = Number(action.number) + 1

            return {
                ...state, //copying the original state
                value: new_value, //update the value key from the state
            }

        case "SUBSTRACT":
            new_value = Number(action.number) - 1
            return {
                ...state, //copying the original state
                value: new_value, //update the value key from the state
            }

        default:
            return state; //Otherwise, return the existing state unchanged
    }
}

export { reducer };