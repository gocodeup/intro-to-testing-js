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

// Unit tests for the isFive function
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

// Unit tests for the isEven function
describe('isEven', function() {
    it('should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean when called', function() {
        expect(typeof isEven()).toBe("boolean");
    });
    it('should return true when called with argument 2', function() {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when called with argument -4', function() {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when called with argument 3', function() {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when called with "banana"', function() {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when called with argument 8', function() {
        expect(isEven(8)).toBe(true);
    });
    it('should return false when called with Infinity', function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when called with false', function() {
        expect(isEven(false)).toBe(false);
    });
    it('should return false when called with true', function() {
        expect(isEven(true)).toBe(false);
    });
    it('should return false when called empty', function() {
        expect(isEven()).toBe(false);
    });
    it('should return false when called with argument 3.9', function() {
        expect(isEven(3.9)).toBe(false);
    });

});

// Unit tests for the isVowel function
describe('isVowel', function() {
    it('should be a defined function', function() {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean when called', function() {
        expect(typeof isVowel()).toBe("boolean");
    });
    it('should return false when called with 3', function() {
        expect(isVowel(3)).toBe(false);
    });
    it('should return true when called with "a"', function() {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true when called with "A"', function() {
        expect(isVowel("A")).toBe(true);
    });
    it('should return false when called with "y"', function() {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false when called with "Z"', function() {
        expect(isVowel("Z")).toBe(false);
    });
    it('should return false when called with false', function() {
        expect(isVowel(false)).toBe(false);
    });
    it('should return false when called with true', function() {
        expect(isVowel(true)).toBe(false);
    });
    it('should return false when called empty', function() {
        expect(isVowel()).toBe(false);
    });

});

// Unit tests for the add function
describe('add', function() {
    it('should be a defined function', function() {
        expect(typeof add).toBe('function');
    });
    it('should return 5 when adding 3 and 2', function() {
        expect(add(3,2)).toBe(5);
    });
    it('should return -12 when adding -3 and -9', function() {
        expect(add(-3,-9)).toBe(-12);
    });
    it('should return -5 when adding 5 and -10', function() {
        expect(add(5,-10)).toBe(-5);
    });
    it('should return 11 when adding "5" and 6', function() {
        expect(add("5",6)).toBe(11);
    });
    it('should return 6 when adding "-4" and "10"', function() {
        expect(add("-4","10")).toBe(6);
    });
    it('should return 38 when adding "8" and "30"', function() {
        expect(add("8","30")).toBe(38);
    });
    it('should return NaN when adding "banana" and "split"', function() {
        expect(add("banana","split")).toBeNaN();
    });
    it('should return NaN when adding 2 and "apples"', function() {
        expect(add(2,"apples")).toBeNaN();
    });
    it('should return NaN when empty"', function() {
        expect(add()).toBeNaN();
    });
});