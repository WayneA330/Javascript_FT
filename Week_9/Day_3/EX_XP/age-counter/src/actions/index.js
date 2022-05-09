const up = () => {
    return {
        type: 'AGE_UP',
        value: 1
    }
}

const down = () => {
    return {
        type: 'AGE_DOWN',
        value: 1
    }
}

export {
    up,
    down
}