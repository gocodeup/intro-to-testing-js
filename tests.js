// This is the tests file

// Tests confirming the behavior of the sayHello function
describe('sayHello', function() {
  it('should be a defined function', function() {
    expect(typeof sayHello).toBe('function');
  });
  it('should return the string "Hello, World!" when executed', function() {
    expect(sayHello()).toBe("Hello, World!");
  });
  it("should never return 'undefined' when called", function() {
    expect(sayHello()).not.toBe(undefined);
  });
});
