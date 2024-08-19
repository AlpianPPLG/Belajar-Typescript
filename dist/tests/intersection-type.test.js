"use strict";
describe("intersection-type", function () {
    it("should support in ts", function () {
        // intersection type
        const person = {
            name: "Alpian",
            age: 16,
        };
        console.info(person);
        const domain = {
            id: "1",
            name: "Alpian",
        };
        console.info(domain);
    });
});
