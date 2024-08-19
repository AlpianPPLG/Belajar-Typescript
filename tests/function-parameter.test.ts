describe("function-parameter", function () {
  it("should support in ts", function () {
    function sayHello(name: string = "Guest"): string {
      return `Halo ${name}`;
    }

    expect(sayHello()).toBe("Halo Guest");
    expect(sayHello("Alpian")).toBe("Halo Alpian");
  });

  it("should support in ts", function () {
    function sum(...values: number[]): number {
      let total = 0;
      for (const value of values) {
        total += value;
      }
      return total;
    }
    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });

  it("should support in ts", function () {
    function sayHello(firstName: string, lastName?: string): string {
      if (lastName) {
        return `Halo ${firstName} ${lastName}`;
      } else {
        return `Halo ${firstName}`;
      }
    }
    expect(sayHello("Alpian")).toBe("Halo Alpian");
    expect(sayHello("Alpian", "Nova")).toBe("Halo Alpian Nova");
  });
});
