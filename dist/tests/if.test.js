"use strict";
describe("if", function () {
    it("should support in ts", function () {
        const nilai = 90;
        if (nilai > 80) {
            console.info("Mantap");
        }
        else if (nilai > 75) {
            console.info("Ok");
        }
        else {
            console.info("Kurang");
        }
    });
});
