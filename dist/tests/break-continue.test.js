"use strict";
describe("break-continue", function () {
    it("should support in ts", function () {
        let counter = 0;
        do {
            counter++;
            if (counter == 10) {
                break;
            }
            if (counter % 2 == 0) {
                continue;
            }
            console.info(counter);
        } while (true);
    });
});
