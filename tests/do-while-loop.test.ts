describe("do-while-loop", function () {
  it("should support in ts", function () {
    let counter: number = 0;
    do {
      console.info(counter);
      counter++;
    } while (counter < 10);
  });
});
