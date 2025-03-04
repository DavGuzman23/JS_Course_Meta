//!Creamos el objeto prototipo
let car = {
    engine: true,
    steering: true,
    speed: "slow"
}

//Creamos un objeto que hereda de car
const sportsCar = Object.create(car)
//Cambiamos estos valores de car para que solo los tenga sportcar
sportsCar.speed = "fast"
sportsCar.steering = false
console.log(`The sportscar object: ${sportsCar}`);

//Iteramos directamente sobre el objeto hijo, esto nos devuelve las claves de el padre sin valores ni actualizaciones hechas en el hijo
//En definitiva nos devuelve el prototipo
console.log('----for-in is unreliable----')
for (prop in sportsCar) {
    console.log(prop);
}
console.log('Iterating over object AND its prototype');

//Iteramos sobre el hijo y su prototipo, con Object.keys nos traemos las propiedades cambiadas en el hijo y las mostramos sin necesidad de mostrar o cambiar las del padre
//! En definitiva itera sobre el hijo sin contar en absoluto el prototipo
console.log('----- for-of is reliable -----')
for(prop of Object.keys(sportsCar)) {
    console.log(`${prop} : ${sportsCar[prop]}`);
}
console.log('Iterating over objects OWN PROPERTIES only!, not the super values');

//Imprime las propiedades pero como undefined
for (prop in Object.keys(sportsCar)) {
    console.log(`${prop} : ${sportsCar[prop]}`);
}
