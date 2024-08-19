"use strict";
describe("function-as-param", function () {
    it("should support in ts", function () {
        function sayHello(name, filter) {
            return `Halo ${filter(name)}`;
        }
        function toUpper(name) {
            return name.toUpperCase();
        }
        expect(sayHello("Alpian", toUpper)).toBe("Halo ALPIAN");
        // Anonymus Function
        expect(sayHello("Alpian", function (name) {
            return name.toUpperCase();
        })).toBe("Halo ALPIAN");
        // Arrow Function
        expect(sayHello("Alpian", (name) => {
            return name.toUpperCase();
        })).toBe("Halo ALPIAN");
    });
});
