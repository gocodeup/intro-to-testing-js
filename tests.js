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


describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string', function (){
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string \"Hello, Jane!\"', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Jane!" when the string \"Jane"\ is passed', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return "Hello, Pat!" when passed the string \"Pat\" is passed', function (){
        expect(sayHello("Pat")).toBe("Hello, Pat!")
    })
});
// Step 1: Add another (tiny) assertion! In tests.js, assert that sayHello("Pat") returns "Hello, Pat!".
// Since our tests should be super simple, the assertion should be expect(sayHello("Pat")).toBe("Hello, Pat!")
// Step 2: Run all tests and make sure that this newly added test is red and failing.
//     Step 3: Again, you may feel the urge to jump to the "correct" answer already. Let's stay on target.
//     Write just enough code to green the test. For this case, just enough code means adding another conditional
//     such that if input === "Pat", then the function should have return "Hello, Pat!".
// Step 4: Run all tests. Does each test turn green? If so, then we can proceed.
//     Step 5: Refactor! It's definitely refactoring time!
