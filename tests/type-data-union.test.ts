describe('union tipe data', function() {
    it('should support in ts', function() {
        
        // union type
        let example: number | string | boolean = "alpian";
        console.info(example);

        example = 100;
        console.info(example);

        example = true;
        console.info(example);
        
        // ================================================== //

        function process(value: number | string | boolean) {
            if(typeof value === "string") {
                return value.toUpperCase();
            } else if(typeof value === "number") {
                return value + 2; // + 2
            } else {
                return !value;
            }
        } 
        expect(process(100)).toBe(102); // must + 2 too
        expect(process("alpian")).toBe("ALPIAN");
        expect(process(true)).toBe(false);
    });
});