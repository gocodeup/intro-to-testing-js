// helloWorld function 
// function helloWorld() {
//     return "Hello, World!";
// }

var helloWorld = function() {
    return "Hello, World!";
}

var test = true;

function sayHello(input) {
    if(typeof input === 'string' && input.length > 0) {
        return "Hello, " + input + "!";
    } else {
        return "Hello, World!";
    }
};
