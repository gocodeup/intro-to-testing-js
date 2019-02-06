# Intro to Testing in JS

## Summary
This is an introduction to automated testing in JavaScript. The idea behind testing is to provide feedback on the code you write to solve a problem, add a feature, or fix a bug. The feedback from the tests comes in the form of green passing tests or red failing tests. Simply, tests are functions that test functions to compare the results of the actual output vs. the expected, specified output.

## Overview
- Green tests are passing, red tests mean that the code is incomplete, inaccurate, missing, or you have a syntax error somewhere in `code.js`.
- Syntax errors in either the `tests.js` or the `code.js` file will keep things from running accurately.
- The approach of writing tests before writing the code that passes is called Test-Driven Development, or TDD.
- Writing small tests, like the ones provided, is called `unit testing`.
- "Unit testing" means to test a piece of functionality as small as a single function.
- This introduction will introduce unit tests, writing code to pass unit tests, and your very first unit tests.

## Getting Started
1. Fork this repository to make a copy on your own GitHub account.
1. Make sure that your browser is showing this project in your own repositories list in your own account, not Codeup's.
1. Click the green button on the right that says "Clone or Download". 
1. The clone address should look like `git@github.com:your-github-username/intro-to-testing-js.git`, where `your-github-username` is actually your own username on GitHub.
1. Once you've copied your repo's clone address, it's time to clone the project in one of two ways: 
    - If you're using IntelliJ, choose New->Project From Version Control->Git and then paste in the clone address.`git clone git@github.com:your-github-username/intro-to-testing-js.git`.
    - If you're using command line, then execute the following command line command: `git clone git@github.com:your-github-username/intro-to-testing-js.git`.
1. Once cloned to your projects directory, open up the project.
1. Launch `report.html` in your browser. You should see a set of green tests for the `sayHello` function.
1. Refresh `report.html` to re-run new code in `test.js` or `code.js`. Do this any time the test or the implementation code changes.

### Project Structure
- The `report.html` file is the test running tool. In this case, the HTML page is loading both the `tests.js` and `code.js` files.
- The `tests.js` file contains the assertions that provide feedback on the appropriateness of the solutions in `code.js`.
- The `code.js` file contains the implementation code. An "implementation" means the code that is meant to solve a problem, fix a bug, or add a feature.

## First Exercises - look, guess, test, conclude

1. Clone this repo to your projects folder following the "Getting Started" directions. Take a moment to orient yourself with the test runner, the existing tests, and the implementation inside of `code.js`.

1. Once you're comfortable, go to `code.js` and change the name of the `sayHello` function to `helloWorld`. Then refresh `report.html` in your browser.
    - What do you notice about the test results? 
    - What are some ways you think we could green the tests again?
    
1. In `tests.js`, change the name of every occurrence of `sayHello` to `helloWorld`. Keep your `helloWorld` function inside `code.js` the same.
    - Refresh `report.html`
    - If there are any red tests, be sure to check your syntax and make sure that any `sayHello` is now `helloWorld`
    - Rerun your tests by refreshing `report.html`.
    - Ensure that all tests are green before moving onto the next exercise.

1. Inside of the `helloWorld` function in `code.js`, change the line `return "Hello, World!"` to `console.log("Hello, World!")`. Then refresh `report.html`.
    - What happens to the tests? Identify which tests stay green and which ones turn red. 
    - Why do you think that is?
    - Consider, what is the return value of a `console.log`?
    - Consider, what is the return value of a `return`?
    - Fix your `helloWorld` implementation so that it greens all the tests.

1. Before moving on, ensure that all tests are green and that `helloWorld` is the function under test.

1. Commit and push your work to your GitHub repository.
    - Open your terminal and navigate to the local directory where you cloned this project. 
    - First, `git status`. Notice which files are tracked by git.
    - Second, type `git add -A` to tell git that you want to get all the changed files staged for commit.
    - Now, type `git status`. You should see file names in green. This means that the files are ready for commit.
    - Next, type `git commit -m "adding the first execise for intro to testing"`
    - Type `git status`, again, to make sure that all files are added and committed.
    - Finally, push your work by running `git push`. Pushing uploads your new commits to your remote repository, meaning your own fork on GitHub.

## Test Driven Development workflow: Tests "drive" the development.
[Test Driven Development](https://en.wikipedia.org/wiki/Test-driven_development), TDD, is the process of writing a test before writing the code that passes the test. Here's the TDD workflow:
1. Step 1: Write a (tiny) test: Identify the simplest, smallest thing you want to confirm. For example, before a function exists, assert that the function is defined.
2. Step 2: Run all the tests to ensure that the new test fails. We're **supposed** to see a red, failing test, since there's no code yet to green it. Red means we did the first step correctly.
3. Step 3: Write only enough code to green that newest test. No more, no less.
4. Step 4: Run all tests. We're looking for green tests across the board.
5. Step 5: Refactor the code. [To refactor](https://martinfowler.com/bliki/DefinitionOfRefactoring.html) means to increase the code quality without changing its observable behavior. This is an opportunity to reduce duplication, increase readability, or increase the flexibility of your implementation.
6. Repeat.

## Our first "Test Drive"
Our next exercise is to follow the TDD workflow to develop incremental tests and solutions for testing a `sayHello()` function that takes in a name as an argument and returns a string that says hello to that name.
- Step 1: Let's write the smallest test possible. Open up `tests.js` and add a `describe`, an `it`, and an `expect` to assert that `sayHello` is a defined function. Use your tests for `helloWorld` as a guide. 
    - `tests.js` should have the describe section and 3 expectations for `helloWorld`.
    - We're going to add a second describe, and one single `it('should be a defined function', ...)` statement with one, single, `expect` inside the `it`.
- Step 2: Run all the tests. At this point, we're expecting and *hoping* for a single red, failing test that we just now authored.
- Step 3: Now, let's 
- Step 4: Run all the tests. We're expect
- Step 5: Given that this is our first (tiny) test and our first implementation, this
- Step 6: Repeat (move to the next section)

- Git add, git commit, and push your work. `git add .`, `git commit -m "add first TDD workflow"`, then `git push`.

## Our second "Test Drive" 

- Git add, git commit, and push your work. `git add .`, `git commit -m "add first TDD workflow"`, then `git push`.

## Your turn to drive! 
- Add some more tests
- Make sure that when you do `sayHello("Pat")`, the function returns "Hello, Pat!"
- Make sure that when you do `sayHello("Alex")`, the function returns "Hello, Alex!"


## What about incorrect inputs?     
- What happens when we call sayHello with no input? We get `"Hello, undefined!"` and that's silly!
- What happens if we send `true` or `false` `"Hello, true!"`
- 
