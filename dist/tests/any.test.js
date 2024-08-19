"use strict";
describe('any', function () {
    it('should support in ts', function () {
        // tipe data any
        const manusia = {
            nama: "Alpian",
            umur: 16,
            hobi: "ngoding",
            kelas: "X.RPL"
        };
        manusia.hobi = "baca";
        manusia.alamat = "Samarinda, Kalimantan Timur, Indonesia";
        console.info(manusia);
    });
});
