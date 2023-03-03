// Unit tests for the helloWorld function
// describe('helloWorld', function() {
//     it('should be a defined function', function() {
//       expect(typeof helloWorld).toBe('function');
//     });
//     it('should return a string when called', function() {
//       expect(typeof helloWorld()).toBe("string");
//     });
//     it('should return the string "Hello, World!" when executed', function() {
//       expect(helloWorld()).toBe("Hello, World!");
//     });
//     it("should never return 'undefined' when called", function() {
//       expect(helloWorld()).not.toBe(undefined);
//     });
// });

// ====================================================================

describe("sayHello" , function() {
    it('should be a defined function', () => {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called.', () => {
        expect(typeof sayHello()).toBe("string")
    });
    it('should return "Hello, Jane!" when sayHello("Jane") is called.', () => {
        expect(sayHello("Jane")).toBe("Hello, Jane!")
    });
    it('should return "Hello, Alex!" when sayHello("Alex") is called.', () => {
        expect(sayHello("Alex")).toBe("Hello, Alex!")
    });
    it('should return "Hello, Pat!" when sayHello("Pat") is called.', () => {
        expect(sayHello("Pat")).toBe("Hello, Pat!")
    });
    it('should return "Hello, World!" when sayHello() is called.', () => {
        expect(sayHello()).toBe("Hello, World!")
    });
    it('should return "Hello, World!" when sayHello(true) is called.', () => {
        expect(sayHello(true)).toBe("Hello, World!")
    });
    it('should return "Hello, World!" when sayHello(false) is called.', () =>  {
        expect(sayHello(false)).toBe("Hello, World!")
    });
    it('should return "Hello, World!" when sayHello(null) is called.', () =>  {
        expect(sayHello(null)).toBe("Hello, World!")
    });
    it('should return "Hello, World!" when sayHello("") is called.', () =>  {
        expect(sayHello("")).toBe("Hello, World!")
    });
    it('should return "Hello, World!" when sayHello(2.3) is called.', () =>  {
        expect(sayHello(2.3)).toBe("Hello, World!")
    });
    // it('should return "Hello, World!" when sayHello("5") is called.', () =>  {
    //     expect(sayHello("5")).toBe("Hello, World!")
    // });
});
/* 
Some edge cases to consider. What if:
    the input is null? ✅
    the input is an empty string like ""? ✅
    the input is a number like 2.3? ✅
    the input is a number inside a string like "5"?
    the input is another data type like an array, object, or function? 
    */
// ====================================================================
// Exercise #10 Let's Test-Drive an isFive function!

// describe("isFive", function() {
//     it('should be a defined function', function () {
//         expect(typeof "isFive").toBe('function');

//     });
// })