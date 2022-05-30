const countMultiply = require("./app2");

test("Multiply horizontal position and depth", () => {
    expect(
        countMultiply([
          "forward 5",
          "down 5",
          "forward 8",
          "up 3",
          "down 8",
          'forward 2'
        ])
      ).toBe(900);
});
