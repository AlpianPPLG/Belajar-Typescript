import { Employee, Manager } from "../src/employee";

describe("extending-interface", function() {
    it('should support in ts', function() {
        const employee: Employee = {
            id: "1",
            name: "Alpian",
            division: "7"
        };
        console.info(employee);

        const manager: Manager = {
            id: "2",
            name: "Alpian",
            division: "8",
            numberOfEmployees: 10
        }
        console.info(manager);
    });
});