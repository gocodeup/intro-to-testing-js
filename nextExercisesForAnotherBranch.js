describe('isSeven', function() {
    it('should be a defined function', function() {
        expect(typeof isSeven).toBe('function');
    });
    it('should return true when the input is 7', function() {
        var result = isSeven(7);
        expect(result).toBe(true);
    });
    it('should return false when the passed input is 5', function() {
        var result = isSeven(5);
        expect(result).toBe(false);
    });
    it('should return false when the function is executed with no inputs', function() {
        var result = isSeven();
        expect(result).toBe(false);
    });
});

// contains hello
describe('containsHello', function() {
    it('should be a defined function', function() {
        expect(typeof containsHello).toBe('function');
    });
    it("should return true when the input string passed in contains 'hello'", function() {

    });
    it("should return "
});


// Demonstrate adding 
// sayHelloTo(name)

// isSeven

// addFive(number)  

// add(a, b)