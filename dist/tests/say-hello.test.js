import { sayHello } from "../src/say-hello";
describe("sayHello", function () {
    it('halo alpian', function () {
        expect(sayHello('Alpian')).toBe('Halo Alpian');
    });
});
// npm test(js) untuk menjalankan semuanya
// npm run test:watch untuk menjalankan secara realtime
// npm run test:coverage untuk menjalankan dan menampilkan coverage
// npm run test:update untuk mengupdate coverage
// npm run test:ci untuk menjalankan test dan menampilkan coverage dalam format lain
// npx tsc, ts code compile in folder dist to js code.
// For Running Ts File Is Used The Unit Test Is Named npx jest
// npx jest tests/say-hello.test.ts, bisa juga diarahkan ke folder dan nama file nya
// npx jest tests/tipe-data.test.ts
// agar proses compilasi file ts secara terus menerus adalah dengan menggunakan perintah, npx tsc --watch
// -> untuk menghentikan proses kompilasi yang berjalan terus menerus tekan ctrl + c saja.
