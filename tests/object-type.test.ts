describe('object type', function() {
    it('should support in ts', function() {

        // object type 1

        const person: { name: string, age: number, hobby?: string[] } = {
            name: "Alpian",
            age: 16
        }
        person.age = 17;
        console.info(person);

        // object type 2

        interface Person {
            name: string;
            age: number;
        }

        function greet(person: Person) {
            return `Halo namaku adalah ${person.name} aku berumur ${person.age} tahun`;
        }
        console.info(greet({name: "Alpian", age: 16}));
        
    });
});