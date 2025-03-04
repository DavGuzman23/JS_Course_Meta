//Prototipo de donde se heredaran propiedades y metodos
let bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true,
}

//Al crear el objeto puedes acceder a todas las propiedades y metodos del padre y tendran el mismo prototipo
let eagle = Object.create(bird) 


//Vamos a cambiar uno de los valores del prototipo, sin embargo la original sigue con el mismo valor
let penguin = Object.create(bird)
penguin.canFly = false