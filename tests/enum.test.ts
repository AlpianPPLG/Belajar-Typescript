import { CustomerType, Customer } from "../src/enum";

describe('enum', function() {
    it('shodld support in ts', function() {

        const customer: Customer = {
            id: 1,
            name: "Alpian",
            type: CustomerType.GOLD
        }
        console.info(customer);

    });
});
