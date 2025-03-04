// Functional programming

var currencyOne = 100
var currencyTwo = 0
var echangeRate = 1.2

function convertCurrency(amount, rate) {
    return amount*rate
}

currencyTwo = convertCurrency(currencyOne, echangeRate)

console.log(currencyTwo);
