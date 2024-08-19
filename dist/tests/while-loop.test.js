"use strict";
describe("while-loop", function () {
    it("should support in ts", function () {
        let counter = 0;
        while (counter < 10) {
            console.info(counter);
            counter++;
        }
    });
});
