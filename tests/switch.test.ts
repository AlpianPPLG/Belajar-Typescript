describe("swirch", function () {
  it("should support in ts", function () {
    function sayHallo(name: string): string {
      switch (name) {
        case "Alpian":
          return "Halo Alpian";
        case "Nova":
          return "Halo Nova";
        default:
          return "Halo";
      }
    }

    console.info(sayHallo("Alpian"));
    console.info(sayHallo("Nova"));
    console.info(sayHallo("Unknown"));
  });
});
