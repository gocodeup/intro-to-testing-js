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


fdescribe("sayHello" , function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called.', function () {
        expect(typeof sayHello()).toBe("string")
    });
//     it('should return "Hello, Jane!" when sayHello("Jane") is called.', function () {
//         expect(sayHello("Jane")).toBe("Hello, Jane!")
//     });
//     it('should return "Hello, Alex!" when sayHello("Alex") is called.', function () {
//         expect(sayHello("Alex")).toBe("Hello, Alex!")
//     });
//     it('should return "Hello, Pat!" when sayHello("Pat") is called.', function () {
//         expect(sayHello("Pat")).toBe("Hello, Pat!")
//     });
//     it('should return "Hello, World!" when sayHello() is called.', function () {
//         expect(sayHello()).toBe("Hello, World!")
//     });
//     it('should return "Hello, World!" when sayHello(true) is called.', function () {
//         expect(sayHello(true)).toBe("Hello, World!")
//     });
//     it('should return "Hello, World!" when sayHello(false) is called.', function () {
//         expect(sayHello(false)).toBe("Hello, World!")
//     });
});

// describe("isFive", function() {
//     it('should be a defined function', function () {
//         expect(typeof "isFive").toBe('function');

//     });
// })