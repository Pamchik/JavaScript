const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const resultElement = document.getElementById('result')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
let selectedSymbol = 'plus'

plusBtn.onclick = function () {
    selectedSymbol = 'plus'
}

minusBtn.onclick = function () {
    selectedSymbol = 'minus'
}

function printResult(result) {
    result < 0
        ? resultElement.style.color = 'red'
        : resultElement.style.color = 'green'
    resultElement.textContent = result 
}

function calculateAction(inp1, inp2, actionSymbol) {
    const num1 = parseInt(inp1.value, 10)
    const num2 = parseInt(inp2.value, 10)
    if (actionSymbol === 'plus') {
        return num1 + num2
    } else if (actionSymbol === 'minus') {
        return num1 - num2 
    }
}

submitBtn.onclick = function () {
    const result = calculateAction(input1, input2, selectedSymbol)
    if (result) { printResult(result) }
}