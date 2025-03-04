/* const num1 = 2
const num2 = 5
const test1 = num1 % 2
const test2 = num2 % 2
const result1 = test1 === 0
const result2 = test2 === 0


console.log(`Es ${num1} un numero par? ${result1}`)
console.log(`Es ${num2} un numero par? ${result}`) */

var place = "firsts"


/* switch(place) {
    case "first":
        console.log("First place");
        break
    case "second":
        console.log("Second place");
        break
    case "third":
        console.log("Third place");
        break
    default:
        console.log("No place");
} */

var age = 66

if(age >= 65) {
    console.log('Usted obtiene sus ingresos de pension')
}else if(age >= 18) {
    console.log('Obtienes una asignación')
}else {
    console.log('No tienes ingresos')
}

var dia = 'domingos'

switch(dia) {
    case 'lunes':
        console.log('Hoy es lunes')
        break
    case 'martes':
        console.log('Hoy es martes')
        break
    case 'miercoles':
        console.log('Hoy es miercoles')
        break
    case 'jueves':
        console.log('Hoy es jueves')
        break
    case 'Viernes':
        console.log('Hoy es viernes');
        break
    case 'sabado':
        console.log('Hoy es sabado');
        break
    case 'domingo':
        console.log('Hoy es domingo')
        break
    default:
        console.log('No sabemos que dia es')
}