"use strict";
describe("indexible-interface", function () {
    it("should support in ts", function () {
        const names = ["Alpian", "Alpian"];
        console.info(names);
    });
    it("should support in ts", function () {
        const dictionary = {
            Name: "Alpian",
            Address: "Indonesia",
        };
        expect(dictionary["Name"]).toBe("Alpian");
        expect(dictionary["Address"]).toBe("Indonesia");
    });
});
