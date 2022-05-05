const increase = () => {
    return {
        type: "INCREASE_COUNT"
    }
}

const decrease = () => {
    return {
        type: "DECREASE_COUNT"
    }
}

export {
    increase,
    decrease,
}