"use strict";
describe("function-in-interface", function () {
    it("should support in ts", function () {
        const person = {
            name: "Alpian",
            sayHello: function (name) {
                return `Halo ${name}, Nama Ku Adalah ${this.name}`;
            },
        };
        console.info(person.sayHello("Nova"));
    });
});
