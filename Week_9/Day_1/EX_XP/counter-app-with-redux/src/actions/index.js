const add = value => {
    return {
        type: "ADD",
        number: value
    }
}

const substract = value => {
    return {
        type: "SUBSTRACT",
        number: value
    }
}

export {
    add,
    substract,
}