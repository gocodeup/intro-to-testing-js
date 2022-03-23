// helloWorld function 

function helloWorld() {
    return "Hello, World!";
}

//Function Expression works the same as defined function due to first class citizen category
// const helloWorld = function() {
//     return "Hello, World!";
// }

//-------------
//sayHello function

function sayHello(input) {

//--Refactor the code for more new names!--
    // if (input === 'Alex') {
    //     return "Hello, Alex!";
    // } else if (input === 'Pat') {
    //     return "Hello, Pat!";
    // } else {
    //     return "Hello, Jane!";
    //     }

// Exercise #6 Implement the refactor!
//     return "Hello, " + input + "!";
//     }

// Exercise #8 "Repeat" step (where we look for additional tests to add)
// return (input === undefined || typeof input === "boolean") ? "Hello, World!" : "Hello, " + input + "!";

// Refactor code after implementing tests for edge cases
    if (typeof input !== "string") {
        return "Hello, World!";
    } else if (input === "") {
        return "Hello, World!";
    } else {
        return "Hello, " + input + "!";
        }
}

function isFive(input) {
    if (typeof input === "number") {
        return true;
    } else if (typeof input === "string") {
        return (typeof Number(input) === "number");
    } else {
        return false;
    }
}

function isEven(input) {
    return (input % 2 === 0);
}