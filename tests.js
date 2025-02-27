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



describe('sayHello', function (){
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe('string');
    });
    it("should return 'Hello, Jane!' when called", function () {
        expect(sayHello('Jane')).toBe("Hello, Jane!");
    });
    it("should return 'Hello, Alex!' when called", function () {
        expect(sayHello('Alex')).toBe("Hello, Alex!");
    });
    it("should return 'Hello, Pat!' when called", function () {
       expect(sayHello('Pat')).toBe("Hello, Pat!");
    });
    it("should return 'Hello, World!'", function () {
        expect(sayHello()).toBe("Hello, World!");
    });
    it("should return 'Hello, World!' when true", function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it("should return 'Hello, World!' when false", function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it("should not return 'Null' when called", function (){
        expect(sayHello()).not.toBe(null);
    });
    // it("should return 'Hello, World!' when input is a number", function () {
    //     expect(sayHello()).toBe("Hello, World!");
    // });
    // it("should return 'Hello, World!' when an array", function () {
    //     expect(sayHello([''])).toBe("Hello, World!");
    // });
});


// describe("isFive", function () {
//     it("should be a defined function", function () {
//         expect(typeof isFive).toBe('function');
//     });
//     it("input should be a number", function () {
//         expect(isFive()).toBe('boolean');
//     });
// });



