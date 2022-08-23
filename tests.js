// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
// ur next exercise is to follow the TDD workflow to develop incremental tests and solutions for testing a sayHello() function that
// takes in a name as an argument and returns a string that says hello to that name.
//
//     Step 1: Let's write the smallest test possible. Open up tests.js. Add a describe, an it, and an expect to assert
//     that sayHello is a defined function. Use your tests for helloWorld as a guide.
// Step 2: Run all the tests. At this point, we're expecting and hoping for a single, red failing test that we just now authored.
// Step 3: Now, let's go to code.js and create an empty function definition for sayHello.
// Step 4: Run all the tests. We're expecting all tests, including the new test for sayHello to be green.
// Step 5: Given that this is our first (tiny) test and our first implementation, there is not yet the opportunity to refactor.
//     Step 6: The last TDD step is to "repeat" the process of adding another test. What we're going to do is add our work to git
//     and then move to Exercise #2, which is to add the second test.


describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
});
