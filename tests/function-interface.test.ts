describe('function-interface', function() {
    it('should support in ts', function() {

        // function interface
        interface addFunction {
            (value1: number, value2: number): number
        }
        const add: addFunction = (value1: number, value2: number): number => {
            return value1 + value2;
        }
        console.info(add(3,2));
        // expect(add(3,4)).toBe(7);
    })
});