"use strict";
describe('object type', function () {
    it('should support in ts', function () {
        // object type 1
        const person = {
            name: "Alpian",
            age: 16
        };
        person.age = 17;
        console.info(person);
        function greet(person) {
            return `Halo namaku adalah ${person.name} aku berumur ${person.age} tahun`;
        }
        console.info(greet({ name: "Alpian", age: 16 }));
    });
});
