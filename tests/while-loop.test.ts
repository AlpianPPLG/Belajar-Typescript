describe("while-loop", function () {
  it("should support in ts", function () {
    let counter: number = 0;

    while (counter < 10) {
      console.info(counter);
      counter++;
    }
  });
});
