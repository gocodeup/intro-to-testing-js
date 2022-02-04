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

describe('sayHello', function() {
    //Test for its a function
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    //Test for
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello()).toContain("Hello ");
        });
    it("should never return 'undefined' when called", function() {
        expect(sayHello()).not.toBe(undefined);
        });
})

describe('sayHello', function() {
    //return a string when called.
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });

})

