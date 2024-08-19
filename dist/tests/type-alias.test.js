describe("type alias", function () {
    it("should support in ts", function () {
        const category = {
            id: 1,
            name: "Handphone",
        };
        const product = {
            id: "1",
            name: "Samsung",
            price: 3000000,
            category: category,
        };
        console.info(category);
        console.info(product);
    });
});
export {};
