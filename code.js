// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// function statement syntax
// function helloWorld() {
//     return "Hello, World!";
// }
// function expression syntax (assigning an anonymous function to a variable)
// const helloWorld = function() {
//     return "Hello, World!";
// }

// I noticed that everything is not working now
// We have to name it properly in the test.js file to hello();
// Back to green when i changed the name back

//-step #3
// Does not work when we change the return string
// message appears:
//      -should return the string "Hello, World!" when executed

//-step #4
// When you insert a console log inside this function jasmine will only allow the first test to be done, which is
// create a function.
// with jasmine you have to be exact with what you want your functions and/or code to do.

//-step #5
// Syntax Same thing, error because with jasmine it makes sure your code is doind what it suppose to be doing.

//-Step #6
// It does work.
// works with a constant variable as well.


//--- Exercise #1 Take your first "Test Drive" by writing your first test!

function sayHello(insertName){
    return (insertName === undefined || typeof insertName == "boolean") ? "Hello World" : "Hello "+ insertName;

}

//--- Exercise #10
function isFive(insertNumber){
    return insertNumber == 5 ? true : false;
}
//--- Exercise #11
function isEven(num){
    return (num % 2 == 0 && !(typeof num == "boolean")) ? true : false;
}