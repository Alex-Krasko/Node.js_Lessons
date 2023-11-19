function add(a, b) {
    if (a === NaN || b === NaN) return 'Error. Not a Number.'
    else return a + b
}


function substract(a, b) {
    if (a === NaN || b === NaN) return 'Error. Not a Number.'
    else return a - b
}

function mult(a, b) {
    if (a === NaN || b === NaN) return 'Error. Not a Number.'
    else return a * b
}

function div(a, b) {
    if (a === NaN || b === NaN || b === 0) return 'Error'
    else return a / b
}

function SqRoot(a) {
    if (a === NaN) return 'Error. Not a Number.'
    else return Math.sqrt(a)
}

module.exports = { add, substract, mult, div, SqRoot };
