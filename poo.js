// Functional programming
let price = 10
let stateTax = 1.2

const calculatePriceWithTax = (priceParameter, tax) => {
    let calculationFunctional = priceParameter*tax
    return calculationFunctional
}
console.log(calculatePriceWithTax(price, stateTax));


//POO
let purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: () => {
        let calculation = purchase1.shoes * purchase1.stateTax
        return(`Total price ${calculation}`);       
    }
}

//Misma implementacion con THIS, mejor practica aunque funciona igual que la anterior forma
let purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: () => {
        let calculation = this.shoes * this.stateTax
        return(`Total price ${calculation}`);       
    }
}

console.log(purchase1.totalPrice());

