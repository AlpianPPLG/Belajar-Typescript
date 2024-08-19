describe('optional parameters', function() {
    it('should support in ts', function () {

        // optional parameter
        function greet(name?: string | null) {
            if(name) {
                console.info(`Hello ${name}`);
            } else {
                console.info("Hello World");
            }
        }
        greet("Alpian"); // memanggil param nama
        const name: string | undefined = undefined // opsi untuk param
        greet(name); // hello world, karena kondisi nya adalah undefined
        greet(null); // jika kondisi pertama adalah null maka akan masuk ke kondisi ke dua yaitu else
    });
});