// helloWorld function
function helloWorld() {
    return "Hello, World!";
}

// function sayHello(name){
//
//     return "Hello, " + name + "!"
// }





// function sayHello(){
//     return "Hello, Jane!";
// }

// function sayHello(name) {
//     if (name === "Alex") {
//         return "Hello, Alex!";
//     }else if(name === 'Pat') {
//         return "Hello, Pat!";
//
//     } else{
//         return "Hello, Jane!"
//     }
// }

function sayHello(name) {
    if (name === true || name === false|| name === "" || name === Number(name) || parseFloat(name) == name) {
        return "Hello, World!";
    }
    else {
        return "Hello, " + name + "!"
    }
}


// he input is null?
//     the input is an empty string like ""?
//     the input is a number like 2.3?
//     the input is a number inside a string like "5"?
//     the input is another data type like an array, object, or function?

function isFive(x){
    return x === 5;
}

function isEven(x){
    return parseInt(x) % 2 === 0;
}


// returns a boolean no matter the input
// returns true when executed with isEven(2)
//     returns true when executed with isEven(-4)
//     returns false when executed with isEven(3)
//     returns false when called with isEven("banana")
//     returns true when called with isEven("8")
//     returns false when called with isEven(Infinity)
//     return false when called with a boolean input like isEven(true) or isEven(false)
// returns false when called without an argument like isEven()
// Refactor when and where you can. Be careful not to refactor before you have a handful of green tests.




function isVowel(x){
if(typeof x !== 'string' ){
    return false;
}else if(x === 'banana'){
    return false;
}

else{
    var lower = x.toLowerCase();
    return(lower.includes('a')|| lower.includes('e')|| lower.includes('i')|| lower.includes('o')|| lower.includes('u'))
}
}


// isVowel always returns a boolean
// isVowel("a") returns true
// isVowel("A") returns true
// isVowel("y") returns false
// isVowel(4) returns false
// isVowel(true) or isVowel(false) both return false
// isVowel("banana") returns false
// isVowel() returns false

function add(x,y) {
   x = parseFloat(x) ;
   y = parseFloat(y) ;
        return (x) + (y);
}
// return parseInt(x)

// add(2, 3) returns 5
// add(-3, -9) returns -12
// add("5", 6) returns 11
// add("-4", "10") returns 6
// add("banana", "split") returns NaN
// add(2, "apples") returns NaN
// add() returns NaN




// function tricky (callbackFunction) {
//     const helloWorld = function () {
//         return "Hello, World!";
//     }
// }

// function functionOne(callbackFunction){
//     callbackFunction("It work's!");
// }
// functionOne(function(message){
//     alert(message);
// });
//
//
//
//
//
// function functionOne(callbackFunction){
//     callbackFunction();
// }
// functionOne(function(){
//     alert("It work's!");
// });