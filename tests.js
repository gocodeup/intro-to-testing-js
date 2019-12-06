describe('name for test', function() {
    it('this is the label for this test', function() {
        expect(test).toBeDefined(false);
    });
    it('to be', function() {
        expect(test).toBe(true);
    });
    it('not to be', function() {
        expect(test).not.toBe(false);
    });
});

describe('sayHello', function() {
    it("Should be a defined function", function() {
        expect(typeof sayHello).toBe("function");
    });
    it("Should return a string when called", function() {
        expect(typeof sayHello()).toBe("string");
    });
    it("Should return 'Hello World' when not passed any arguments", function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it("Should return 'Hello World' when passed null", function() {
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it("Should return 'Hello World' when passed an empty string", function() {
        expect(sayHello("")).toBe("Hello, World!");
    });
    it("Should return 'Hello World' when passed 2.3", function() {
        expect(sayHello(2.3)).toBe("Hello, World!");
    });
    it("Should return 'Hello World' when passed '5'", function() {
        expect(sayHello('5')).toBe("Hello, World!");
    });
    it("Should return 'Hello World' when passed true boolean", function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it("Should return 'Hello World' when passed false boolean", function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it("Should return 'Hello, Jane!' when passed 'Jane'", function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it("Should return 'Hello, Alex!' when passed 'Alex'", function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it("Should return 'Hello, Pat!' when passed 'Pat'", function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
});

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