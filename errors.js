/* console.log(a+b);
console.log("This line is never reached"); */

//New reference error
/* throw new ReferenceError("This line is never reached");*/

try{
    //console.log(a+b);
    throw new ReferenceError()
}catch(err) {
    console.log(err);
    console.log("there was an error");
    console.log("The error was saved in the error log");
}
console.log("My program does not stop");

