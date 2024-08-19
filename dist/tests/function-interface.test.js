"use strict";
describe('function-interface', function () {
    it('should support in ts', function () {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        console.info(add(3, 2));
        // expect(add(3,4)).toBe(7);
    });
});
