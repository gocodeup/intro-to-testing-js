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
function sayHello(input) {
    // if(input === "Pat") {
    //     return "Hello, Pat!"
    // } else if(input === "Alex") {
    //     return "Hello, Alex!"
    // }
    // return "Hello, Jane!";
    //---------------------------
    // ^^Refactored:    return "Hello, " + input + "!";
    //---------------------------
    // if (input === undefined) {
    //     return "Hello, World!"
    // } else if (input === true) {
    //     return "Hello, World!"
    // } else if (input === false) {
    //     return "Hello, World!"
    // } else {
    //     return "Hello, " + input + "!";
    // }
    //---------------------------
    if (typeof input === "string") {
        return "Hello, " + input + "!";
    }
        return "Hello, World!"
}