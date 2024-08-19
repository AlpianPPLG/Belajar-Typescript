"use strict";
describe('array', function () {
    it('should must tuple', function () {
        // Array biasa dan array readOnly tipe data tertentu
        const array = [1, 2, 3];
        const array2 = ["alpian", "ferdi", "daffa", "pandya"];
        const names = ["alpian", "ferdi", "daffa", "pandya"];
        const nilai = [1, 2, 3];
        console.info(array);
        console.info(names);
        console.info(nilai);
        console.info(array2);
        console.info(array2[0]); // mengambil indeks ke-
        // array tuple
        const orang = ["Halo", "Aku Alpian Aku Berumur ", 16];
        console.info(orang[0]);
        console.info(orang[1]);
        console.info(orang[2]);
    });
});
