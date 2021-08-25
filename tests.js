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
describe("sayHello", function() {
    it ("should be  a defined function", function() {
        expect(typeof sayHello).toBe("function");
    });
    it("Should return a string when called", function() {
        expect(typeof sayHello()).toBe("string");
    });
    it("should return string \"Hello, Jane!\", when executed", function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it("should return string \"Hello, Alex!\", when executed", function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it("should return string \"Hello, Pat!\", when executed", function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it("should return string \"Hello, World!\", when executed", function () {
        expect(sayHello("World")).toBe("Hello, World!");
    });
})