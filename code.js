// helloWorld function 
// function helloWorld() {
//     return "Hello, World!";
// }

var helloWorld = function() {
    return "Hello, World!";
}

var test = true;

function sayHello(input) {
    return (typeof input === 'string' && input.length > 0 && isNaN(input)) ?
        "Hello, " + input + "!" : "Hello, World!";
}
