let addOperator = (x,y) => {
    console.log('Addition', x + y);
}

let divideOperator = (x,y) => {
    console.log('Division', x / y);
}

module.exports = {
    addition : addOperator,
    division : divideOperator 
}