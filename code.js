// helloWorld function 
function helloWorld(){
    return "Hello, World!";
}

function sayHello(input){
    if(typeof input != "string" || input === ""){
        return "Hello, World!"
    }
    else {
        return "Hello, " + input +"!";
    }
}

function isFive(input){
    if(typeof input === "number" && input === 5){
        return true;
    }
    else{
        return false;
    }
}

function isEven(input){
    return parseFloat(input) % 2 === 0;
}

function isVowel(input) {
    switch (input) {
            case "a":
            case "A":
            case "e":
            case "E":
            case "I":
            case "i":
            case "o":
            case "O":
            case "u":
            case "U":
                return true;
                break;
            default:
                return false;
                break;
    }
}

function add(x, y){
    return parseFloat(x) + parseFloat(y);
}