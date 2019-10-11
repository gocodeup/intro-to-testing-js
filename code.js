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