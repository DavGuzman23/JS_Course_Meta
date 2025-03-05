const top7 = [1,2,3,4,5,6]

//Rest operator, destructuring
//Hemos dividido en 3 elementos
const [a, b, ...rest] = top7

//Esto devolvera cada valor que le pasemos a la funcion multiplicado por el otro
function addTaxToPrices(taxRate, ...itemsBought) {
    return itemsBought.map(item => taxRate *item)
}

//El primer valor es el primer argumento de la funcion, el resto el segundo argumento. En el segundo argumento puedo añadir tantos como quiera
let shoppingCart = addTaxToPrices(1.1, 46, 89, 35, 79)
console.log(shoppingCart)


const meal = ["soup", "steak", "ice cream"]
let [starter2] = meal;
console.log(starter2);
console.log(meal)

let obj = {
    key: 1,
    value: 4
};

//En este caso aunque restemos diferentes valores y objetos, al ser los datos del mimsmo tipo, se restan
let output = { ...obj };
output.value -= obj.key;

console.log(output.value);

