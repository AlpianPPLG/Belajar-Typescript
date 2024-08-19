import { Seller } from "../src/seller";

describe('interface', function () {
    it('should support in ts', function () {

        const seller: Seller = {
            id: 1,
            name: "Alpian",
            address: "Samarinda",
            nik: "1234567890"
        };
        seller.name = "Manusia"
        console.info(seller);

    });
});