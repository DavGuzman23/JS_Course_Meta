class Car {
    constructor(color, speed) {
        this.color = color;
        this.speed = speed;
    }

    turboOn() {
        console.log('turbo is on!');
    }
}

//Primero creamos el nuevo objeto al que queremos aplicarle el prototipo de la Clase
const car1 = new Car('red', 120)
//Para acceder al metodo que quieras
car1.turboOn()