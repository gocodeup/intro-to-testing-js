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

describe('sayHello',function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!"', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World! when no paramater', function () {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the string "Hello, World! when parameter is true', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World! when parameter is false', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World! when parameter is null', function () {
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World! when parameter is 23', function () {
        expect(sayHello(23)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World! when parameter is empty string', function () {
        expect(sayHello("")).toBe("Hello, World!");
    });
    it('should return the string "Hello, World! when parameter is an array', function () {
        expect(sayHello([1,2,3,4,5])).toBe("Hello, World!");
    });
});

describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean when called', function () {
        expect(typeof isFive()).toBe("boolean");
    });
    it('should return false when argument is 4', function () {
        expect(isFive(4)).toBe(false);
    });
    it('should return false when argument is 7', function () {
        expect(isFive(7)).toBe(false);
    });
    it('should return false when argument is 9', function () {
        expect(isFive(9)).toBe(false);
    });
    it('should return true when argument is 5', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return false when argument is "5"', function () {
        expect(isFive("5")).toBe(false);
    });
    it('should return false when argument is null', function () {
        expect(isFive(null)).toBe(false);
    });
    it('should return false when argument is an array', function () {
        expect(isFive([1,2,3,4])).toBe(false);
    });
});