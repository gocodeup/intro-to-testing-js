function sayHello(name){
    if(typeof name == 'undefined' || typeof name == 'boolean'){
        return "Hello, World!";
    }
    return "Hello, " + name + "!";
}

function helloWorld(){
return "Hello, World!";
}

function isFive(input){
return Number(input)===5;
}

function add(numberOne,numberTwo) {
    if (isNaN(numberOne) || isNaN(numberTwo)) {
        return "NaN";
    } else {
        return Number(numberOne )+ Number(numberTwo);
    }
}
function isVowel(letter) {
    switch (letter) {
        case 'a' :
        case 'A':
        case 'e':
        case 'E':
        case 'i':
        case 'I':
        case 'o':
        case 'O':
        case 'u':
        case 'U':
            return true;
    }
return false;
}

function isEven(num){
if (num ===undefined||typeof num==='string'|| num%2!==0||typeof num==="boolean")
{return false;
}else{
    return true;}
}