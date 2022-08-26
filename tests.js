"use strict";

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
// Unit tests for the sayHello function
describe('sayHello', function(){
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    })
    it('should return the string "Hello, Jane!" when passed letter string',function(){
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when passed letter string', function(){
        expect(sayHello("Alex")).toBe(("Hello, Alex!"));
    });
    it('should return the string "Hello, Pat!" when passed letter string', function(){
        expect(sayHello("Pat")).toBe(("Hello, Pat!"));
    });
    it('should return the string "Hello, World!" when passed a nothing', function(){
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when passed true', function(){
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when passed false', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should return the string "Invalid input!" when passed numeric string', function(){
       expect(sayHello("1987")).toBe("Invalid input!");
    });
});
describe('isFive', function(){
    it('should be a defined function', function(){
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean value', function(){
        expect(typeof isFive(5)).toBe('boolean');
        expect(typeof isFive("foo")).toBe('boolean');
    });
    it('should return true when passed 5 as input', function(){
        expect(isFive(5)).toBe(true);
    });
    it('should return true when passed "5" as input', function(){
        expect(isFive("5")).toBe(true);
    });
    it('should return false when passed "five" as input', function(){
        expect(isFive("five")).toBe(false);
    });
});
