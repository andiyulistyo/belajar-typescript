describe("Statis test", () => {
  class Configuration {
    static VERSION: number = 100;
    static NAME: string = "TEST APPLICATION";
  }

  class MathUtil {
    // example static method
    static sum(...values: number[]): number {
      let total: number = 0;
      for (let value of values) {
        total += value;
      }

      return total;
    }
  }

  it("test 1", () => {
    expect(Configuration.VERSION).toBe(100);
  });

  it("test 2", () => {
    expect(Configuration.NAME).toBe("TEST APPLICATION");
  });

  it("test 3", () => {
    expect(MathUtil.sum(1,2,3)).toBe(6);
  });
});
