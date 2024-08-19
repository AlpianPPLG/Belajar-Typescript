"use strict";
describe("overloading-function", function () {
    it("should support in ts", function () {
        function callMe(value) {
            if (typeof value === "string") {
                return value.toUpperCase();
            }
            else if (typeof value === "number") {
                return value * 10;
            }
        }
        expect(callMe(10)).toBe(100);
        expect(callMe("Alpian")).toBe("ALPIAN");
    });
});
