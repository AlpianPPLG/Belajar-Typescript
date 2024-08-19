describe("indexible-interface", function () {
  it("should support in ts", function () {
    interface StringArray {
      [index: number]: String;
    }
    const names: StringArray = ["Alpian", "Alpian"];
    console.info(names);
  });
  it("should support in ts", function () {
    interface StringDictionary {
      [key: string]: string;
    }
    const dictionary: StringDictionary = {
      Name: "Alpian",
      Address: "Indonesia",
    };
    expect(dictionary["Name"]).toBe("Alpian");
    expect(dictionary["Address"]).toBe("Indonesia");
  });
});
