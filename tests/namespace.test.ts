import { MathUtil } from "../src/math-util";

describe("Test namespace", () => {
  it("test 1", () => {
    expect(MathUtil.PI).toBe(3.14);
  });

  it("test 2", () => {
    expect(MathUtil.sum(1, 2, 3)).toBe(6);
  });
});
