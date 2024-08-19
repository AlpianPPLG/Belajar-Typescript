describe('array', function() {
    it('should must tuple', function() {

        // Array biasa dan array readOnly tipe data tertentu
        const array: Array<Number> = [1,2,3]
        const array2: Array<String> = ["alpian", "ferdi", "daffa", "pandya"];
        const names: String[] = ["alpian", "ferdi", "daffa", "pandya"];
        const nilai: Number[] = [1,2,3];

        console.info(array);
        console.info(names);
        console.info(nilai);

        console.info(array2);
        console.info(array2[0]); // mengambil indeks ke-

        // array tuple
        const orang: readonly[string, string, number] = ["Halo", "Aku Alpian Aku Berumur ", 16];

        console.info(orang[0]);
        console.info(orang[1]);
        console.info(orang[2]);

    });
});