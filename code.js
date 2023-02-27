// helloWorld function 
function helloWorld() {
    return "Hello, World!"
}


// function plusOne(num) {
//     if(typeof num === "number") {
//         return num + 1;
//     }
// }

// 1.
// function sayHello(input) {
//     if (typeof input === "string") {
//         return "Hello, " + input + "!";
//     }
//         return "Hello, World!"
// }

function sayHello(name) {
    if(typeof name === "string" && name !== "") {
        return `Hello, ${name}!`
    }
    return "Hello, World!"
}

console.log(sayHello("5"))