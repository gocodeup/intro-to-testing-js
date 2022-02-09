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
        expect(sayHello(true)).toBe("Hello World")
    })
})

//--- Exercise #10
describe('isFive',function (){
    //Test for its a function
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof isFive()).toBe("boolean");
    });
    it('should return the string "Hello World" when executed', function() {
        expect(isFive(5)).toBe(true)
    })
    it('should return the string "Hello World" when executed', function() {
        expect(isFive("5")).toBe(true)
    })
})



//--- Exercise #11
describe('isEven',function (){
    // Test for its a function
    it('should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    // Return a boolean no matter input
    it('should Return a boolean no matter input', function() {
        expect(typeof isEven()).toBe("boolean");
    });
    //returns true when executed with isEven(2)
    it('should returns true when executed with isEven(2)', function() {
        expect(isEven(2)).toBe(true)
    })
    //returns true when executed with isEven(-4)
    it('should returns true when executed with isEven(-4)', function() {
        expect(isEven(-4)).toBe(true)
    })
    //returns false when executed with isEven(3)
    it('should returns false when executed with isEven(3)', function() {
        expect(isEven(3)).toBe(false)
    })
    //returns false when called with isEven("banana")
    it('returns false when called with isEven("banana")', function() {
        expect(isEven("banana")).toBe(false)
    })
    //returns true when called with isEven("8")
    it('should returns true when called with isEven("8")', function() {
        expect(isEven("8")).toBe(true)
    })
    //returns false when called with isEven(Infinity)
    it('should returns false when called with isEven(Infinity)', function() {
        expect(isEven(Infinity)).toBe(false)
    })
    //return false when called with a boolean input like isEven(true) or isEven(false)
    it('should return false when called with a boolean input like isEven(true) or isEven(false)', function() {
        expect(isEven(true)).toBe(false)
        expect(isEven(false)).toBe(false)
    })
    //returns false when called without an argument like isEven()
    it('should returns false when called without an argument like isEven()', function() {
        expect(isEven()).toBe(false)
    })
})

//--- Exercise #12
describe('isVowel',function (){
    // Test for its a function
    it('should be a defined function', function() {
        expect(typeof isVowel).toBe('function');
    });
    // isVowel always returns a boolean
    it('isVowel always returns a boolean', function() {
        expect(typeof isVowel()).toBe("boolean");
    });
    // isVowel("a") returns true
    it('isVowel("a") returns true', function() {
        expect(isVowel("a")).toBe(true);
    });
    // isVowel("A") returns true
    it('isVowel("A") returns true', function() {
        expect(isVowel("A")).toBe(true);
    });
    //isVowel("y") returns false
    it('isVowel("y") returns false', function() {
        expect(isVowel("y")).toBe(false);
    });
    //isVowel(4) returns false
    it('isVowel(4) returns false', function() {
        expect(isVowel(4)).toBe(false);
    });
    //isVowel(true) or isVowel(false) both return false
    it('isVowel(true) or isVowel(false) both return false', function() {
        expect(isVowel(true)).toBe(false);
    });
    //isVowel("banana") returns false
    it('isVowel("banana") returns false', function() {
        expect(isVowel("banana")).toBe(false);
    });
    //isVowel() returns false
    it('isVowel() returns false', function() {
        expect(isVowel()).toBe(false);
    });
})

//--- Exercise  #13
describe('add',function (){
    // Test for its a function
    it('should be a defined function', function() {
        expect(typeof add).toBe('function');
    });
    //add(2, 3) returns 5
    it('add(2, 3) returns 5', function() {
        expect(add(2,3)).toBe(5);
    });
    //add(-3, -9) returns -12
    it('add(-3, -9) returns -12', function() {
        expect(add(-3, -9)).toBe(-12);
    });
    //add("5", 6) returns 11
    it('add("5", 6) returns 11', function() {
        expect(add("5", 6)).toBe(11);
    });
    //add("-4", "10") returns 6
    it('add("-4", "10") returns 6', function() {
        expect(add("-4", "10")).toBe(6);
    });
    //add("banana", "split") returns NaN
    it('add("banana", "split") returns NaN', function() {
        expect(add("banana", "split")).toBe(NaN);
    });
    //add(2, "apples") returns NaN
    it('add(2, "apples") returns NaN', function() {
        expect(add(2, "apples")).toBe(NaN);
    });
    //add() returns NaN
    it('add() returns NaN', function() {
        expect(add()).toBe(NaN);
    });
})