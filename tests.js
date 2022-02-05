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
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
})

//--- All names
describe('sayHello', function() {
    it('should return the string "Hello Jane" when executed', function() {
        expect(sayHello('Jane')).toBe("Hello Jane");
    });
    it('should return the string "Hello Jane" when executed', function() {
        expect(sayHello("Alex")).toBe("Hello Alex");
    });
    it('should return the string "Hello Jane" when executed', function() {
        expect(sayHello("Pat")).toBe("Hello Pat");
    });
})
//----- Exercise #8
describe('sayHello', function() {
    it('should return the string "Hello World" when executed', function() {
        expect(sayHello()).toBe("Hello World")
    });
    it('should return the string "Hello World" when executed', function() {
        expect(sayHello(false)).toBe("Hello, World!")
    })
    it('should return the string "Hello World" when executed', function() {
        expect(sayHello(true)).toBe("Hello World")
    })
})

