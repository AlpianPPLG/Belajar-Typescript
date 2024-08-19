import { Person } from "../src/person";

describe("type-assertion", function () {
  it("should support in ts", function () {
    const person: any = {
      name: "Alpian",
      age: 17,
    };

    const person2: Person = person as Person;
    console.info(person2);
  });
});
