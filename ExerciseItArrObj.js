// Task 1
function logDairy() {
    var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
    for (var items of dairy) {
        console.log(items);
    }
}


// Task 2
const animal = {
canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan(){
    for (var keys of Object.keys(bird)) {
        console.log(`${keys}: ${bird[keys]}`)
    }
}


// Task 3

//Al hacer un for in iteramos tambien sobre el prototipo de la clase y asi muestra todas las propiedades
function animalCan() {
    for (let b in bird) {
        console.log(`${b}: ${bird[b]}`)
    }
}

logDairy()
birdCan()
animalCan()