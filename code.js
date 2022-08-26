// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

let isOnlyNumericString = function(value) {
    return /^\d+$/.test(value);
}
let isOnlyLetterString = function(value){
    return /^[a-zA-Z]+$/.test(value);
}

// sayHello function
function sayHello(input) {
    if(input === undefined || input === true || input === false) {
        return "Hello, World!";
    } else if(isOnlyLetterString(input)) {
        return "Hello, " + input + "!";
    } else if (isOnlyNumericString(input)) {
        return "Invalid input!";
    }
}

// isFive function
function isFive(input){
    if(input === 5 || input === "5") {
        return true;
    } else {
        return false;
    }
}

// isEven function
function isEven(input) {
    if(typeof input === "boolean" || input % 2 === 1 || isOnlyLetterString(input)) {
        return false;
    }
    return true;
}





