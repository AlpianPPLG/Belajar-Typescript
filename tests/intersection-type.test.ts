describe("intersection-type", function () {
  it("should support in ts", function () {
    // intersection type
    const person: { name: string; age: number } & { hobby?: string[] } = {
      name: "Alpian",
      age: 16,
    };
    console.info(person);

    interface HasName {
      name: string;
    }

    interface HasId {
      id: string;
    }

    type Domain = HasId & HasName;

    const domain: Domain = {
      id: "1",
      name: "Alpian",
    };
    console.info(domain);
  });
});
