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
    })
});

