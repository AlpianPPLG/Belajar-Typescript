describe("for-loop", function () {
  it("should support in ts", function () {
    const name: string[] = ["Alpian", "Nova", "Joko"];

    for (let i = 0; i < name.length; i++) {
      console.info(name[i]);
    }

    for (const names of name) {
      console.info(names);
    }

    for (const index in name) {
      console.info(name[index]);
    }
  });
});
