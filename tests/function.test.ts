describe("function", function () {
  it("should support in ts", function () {
    function sayHello(name: string): string {
      return `Halo ${name}`;
    }

    expect(sayHello("Alpian")).toBe("Halo Alpian");

    function printHello(name: string): void {
      console.info(`Halo ${name}`);
    }

    printHello("Nova");
  });
});
