describe("extending-interface", function () {
    it('should support in ts', function () {
        const employee = {
            id: "1",
            name: "Alpian",
            division: "7"
        };
        console.info(employee);
        const manager = {
            id: "2",
            name: "Alpian",
            division: "8",
            numberOfEmployees: 10
        };
        console.info(manager);
    });
});
export {};
