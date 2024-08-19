describe("function-in-interface", function () {
  it("should support in ts", function () {
    interface Person {
      name: string;
      sayHello(name: string): string;
    }
    const person: Person = {
      name: "Alpian",
      sayHello: function (name: string): string {
        return `Halo ${name}, Nama Ku Adalah ${this.name}`;
      },
    };
    console.info(person.sayHello("Nova"));
  });
});
