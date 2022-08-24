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


describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string', function (){
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string \"Hello, Jane!\"', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Jane!" when the string \"Jane"\ is passed', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return "Hello, Pat!" when passed the string \"Pat\" is passed', function (){
        expect(sayHello("Pat")).toBe("Hello, Pat!")
    })
});


//"If your code ain't checked-in to source control, then it doesn't exist."
// In your terminal, ensure that the pwd command shows that you're in the directory for this project.
// First, git status. Notice which files are tracked by git and which files have changes.
// Second, type git add -A to tell git that you want to get all the changed files staged for commit.
// Now, type git status. You should see file names in green. This means that the files are ready for commit.
// Next, type git commit -m "add tests and ability to say 'hello' to any input."
// Type git status, again, to make sure that all files are added and committed.
// Finally, push your work with git push.