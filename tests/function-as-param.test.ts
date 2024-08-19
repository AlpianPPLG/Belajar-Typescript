describe("function-as-param", function () {
  it("should support in ts", function () {
    function sayHello(name: string, filter: (name: string) => string): string {
      return `Halo ${filter(name)}`;
    }
    function toUpper(name: string): string {
      return name.toUpperCase();
    }

    expect(sayHello("Alpian", toUpper)).toBe("Halo ALPIAN");

    // Anonymus Function
    expect(
      sayHello("Alpian", function (name: string): string {
        return name.toUpperCase();
      })
    ).toBe("Halo ALPIAN");

    // Arrow Function
    expect(
      sayHello("Alpian", (name: string): string => {
        return name.toUpperCase();
      })
    ).toBe("Halo ALPIAN");
  });
});
