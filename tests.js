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

// ------------------
// Exercise #1 Take your first "Test Drive" by writing your first test!

describe ("sayHello", function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
// Exercise #2 Ensure our function returns the right data type.
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
// Exercise #3 - Add a test to confirm actual vs. expected output.
    it("should return the string 'Hello, Jane!' when called", function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
// Exercise #4 Add another small, simple test
    it("should return the string 'Hello, Alex!' when called", function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
// Exercise #5 One more test before refactoring...
    it ("should return the string 'Hello, Pat!' when Pat is called", function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
// Exercise #8
    it ("should return the string 'Hello, World!' when no arguments are called", function () {
        expect(sayHello()).toBe("Hello, World!");
    });
    it ("should return the string 'Hello, World!' when true is called", function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it ("should return the string 'Hello, World!' when false is called", function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
// adding all edge cases from Exercise #8
    it ("should return the string 'Hello, World!' when null is called", function () {
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it ("should return the string 'Hello, World!' when empty string is called", function () {
        expect(sayHello("")).toBe("Hello, World!");
    });
    it ("should return the string 'Hello, World!' when 2.3 called", function () {
        expect(sayHello(2.3)).toBe("Hello, World!");
    });
});


// ------------------
// Exercise #10
describe ("isFive", function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe(`function`);
    });
    it ("should return a boolean no matter what is called", function () {
        expect(typeof isFive()).toBe("boolean");
    });
    it ("should return a boolean true when 5 is called", function () {
        expect(isFive(5)).toBe(true);
    });
    it ("should return a boolean true when string '5' is called", function () {
        expect(isFive("5")).toBe(true);
    });
});
















