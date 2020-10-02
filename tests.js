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


//Unit test for sayHello function
describe('sayHello', function() {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function () {
        expect(sayHello('Jane')).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function () {
        expect(sayHello('Alex')).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function () {
        expect(sayHello('Pat')).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(sayHello()).toBe("Hello, World!")
    });
    it('should return boolean true when executed', function () {
        expect(sayHello(true)).toBe("Hello, World!")
    });
    it('should return boolean false when executed', function () {
        expect(sayHello(false)).toBe("Hello, World!")
    });
});

describe('isFive', function() {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function')
    });
    it('should return boolean value', function () {
        expect(typeof isFive()).toBe('boolean')// check
    });
    it('should return true when 5 is passed', function () {
        expect(isFive("5")).toBe(true)
    });
    it('should return true when "5" is passed', function () {
        expect(isFive(5)).toBe(true)
    });
});

    describe('isEven', function () {
        it('should be a defined function', function () {
            expect(typeof isEven).toBe('function')// check
        });
        it('should return boolean value', function () {
            expect(typeof isEven()).toBe('boolean')
        });
        it('should return true when isEven(2)', function () {
            expect(isEven(2)).toBe(true)
        });
        it('should return true when isEven(-4 )is passed', function () {
            expect(isEven(-4)).toBe(true)
        });
        it('should return false when isEven("banana") is passed', function () {
            expect(isEven("banana")).toBe(false)
        });
        it('should return false when Infinity is passed', function () {
            expect(isEven(Infinity)).toBe(false)
        });
        it('should return true when 8 is passed', function () {
            expect(isEven(8)).toBe(true)
        });
        it('should return false when  isEven(3) is passed', function () {
            expect(isEven(3)).toBe(false)
        });
        it('should return false when no arguments are passed', function () {
            expect( isEven()).toBe(false)
        });it('should return "false" when passed a boolean', function() {
            expect(isEven(true)).toBe(false);
            expect(isEven(false)).toBe(false);

        });
    });

    describe('isVowel', function () {
        it('should return boolean value', function () {
            expect(isVowel(Boolean)).toBe(typeof Boolean)
        });
        it('should return true when \'a\' is passed', function () {
            expect(isVowel(true)).toBe('a')
        });
        it('should return true when \'A\' is passed', function () {
            expect(isVowel(true)).toBe('A')
        });
        it('should return false when 4 is passed', function () {
            expect(isVowel(false)).toBe(4)
        });
        it('should return false when \'y\' is passed', function () {
            expect(isVowel(false)).toBe('y')
        });
        it('should return false', function () {
            expect(isVowel(false)).toBe(isVowel(true) || isVowel(false))
        })
        ;it('should return false when "banana" is passed', function () {
            expect(isVowel(false)).toBe("banana")
        })
        ;it('should return false when no parameter is passed', function () {
            expect(isVowel(false)).toBe(isVowel())
        });
    });

describe('add', function() {

    t('should be a defined function', function () {
        expect(typeof add).toBe('function')// check
    });

    it('should return 5 as sum of 2 and 3 are passed', function () {
        expect(add(2 , 3)).toBe(5)
    });
    it('should  return -12 when -3 and -9 are passed', function () {
        expect(add(-9, - 3)).toBe(-12)
    });
    it('should return 11 when 5 and 6 are passed', function () {
        expect(add(5 + 6)).toBe(11)
    });
    it('should  return -6 when -4 and -10 are passed', function () {
        expect(add(-9 - 3)).toBe(12)
    });
    it('should  return \'Nan\' when strings are passed', function () {
        expect(add("banana","split")).toBe("Nan")
    });
    it("should  return \'Nan\' when add(2,\"apples\" is passed", function () {
        expect(add(2,"apples")).toBe("Nan")
    });
    it('should  return \'Nan\' when no parameters are passed', function () {
        expect(add()).toBe("NaN")
    });
});
