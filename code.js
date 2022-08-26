// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// sayHello function
function sayHello(input) {
    let isOnlyNumericString = function(value) {
        return /^\d+$/.test(value);
    }
    let isOnlyLetterString = function(value){
        return /^[a-zA-Z]+$/.test(value);
    }
    if(input === undefined || input === true || input === false) {
        return "Hello, World!";
    } else if(isOnlyLetterString(input)) {
        return "Hello, " + input + "!";
    } else if (isOnlyNumericString(input)) {
        return "Invalid input!";
    }
}

// isFive function
function isFive(){

}

// isEven function
function isEven() {

}

//isVowel function
function isVowel() {

}
// add function
function add() {

}




