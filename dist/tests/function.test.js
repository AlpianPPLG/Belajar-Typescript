"use strict";
describe("function", function () {
    it("should support in ts", function () {
        function sayHello(name) {
            return `Halo ${name}`;
        }
        expect(sayHello("Alpian")).toBe("Halo Alpian");
        function printHello(name) {
            console.info(`Halo ${name}`);
        }
        printHello("Nova");
    });
});
