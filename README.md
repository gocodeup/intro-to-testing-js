# Intro to Testing in JS

## Summary
This is an introduction to automated testing in JavaScript. The idea behind testing is to provide feedback for your implementation, which is the code you write to solve a problem, add a feature, or fix a bug. The feedback from the tests comes in the form of green passing tests or red failing tests. Simply, tests are functions that test functions to compare the results of the actual output vs. the expected, speficied output.

## Getting Started
1. Clone this repository to your projects directory.
    - If you're using IntelliJ, choose New->Project->
    - If you're using command line, then do `git clone git@github.com:gocodeup/intro-to-testing-js.git` in your projects directory.
2. Launch `report.html` in your browser. You should see a set of green tests.
3. Refresh `report.html` to re-run new code in `test.js` or `code.js`.


## Overview
- Green tests are passing, red tests mean that the code is incomplete, inaccurate, missing, or you have a syntax error somewhere in `code.js`.
- In addition to 
- The approach of writing tests before writing the code that passes is called Test-Driven Development, TDD. 

### Project Structure
- The `report.html` file is the test running tool
- The `tests.js` file contains automated tests that . Assertions are 
- The `code.js` file contains the implementation code. This is the code meant to solve a problem, fix a bug, or add a feature.


## Exercises 

1. Inside `code.js`, change the name of the `sayHello` function to `helloWorld`. Then refresh `report.html`. 
    - What do you notice about the test results?
    - What are some ways you think we could green the tests again?

1. In `tests.js`, change the name of every occurance of `sayHello` to `helloWorld`. Keep your `helloWorld` function inside `code.js` the same. 
    - Refresh `report.html`
    - Do you

1. Inside of the `helloWorld` function in `code.js`, change the line `return "Hello, World!"` to `console.log("Hello, World!")`. Then refresh `report.html`.
    - What happens to the tests?
    - Consider, what is the return value of a `console.log`?
    - Fix the broken implementation by converting the `console.log` back to a `return`. 
    - Return values are functions give back to the calling code. 

1. Inside of `tests.js`, let's create some new tests for a function we will build.   


1. 



## Extra Exercises

### Practice writing code to make tests turn green

- check out the is-seven branch
- `git merge is-seven`


### Expand on the isSeven test and implementation
- Add a test that confirms if the input is the string 7
- Refresh to 
- Now