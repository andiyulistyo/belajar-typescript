describe("Error test", () => {
  class ValidationError extends Error {
    constructor(public message: string) {
      super(message);
    }
  }

  function doubleIt(value: number): number {
    if (value < 0) {
      throw new ValidationError("Value cannot be less then 0");
    }
    return value * 2;
  }

  it("test 1", () => {
    let value: number = 10;
    expect(doubleIt(value)).toBe(20);
  });

  it("test 2", () => {
    let value: number = -1;
    expect(() => {
      doubleIt(value);
    }).toThrow(ValidationError);
  });

  it("test 3", () => {
    let value: number = -1;
    expect(() => {
      doubleIt(value);
    }).toThrow("Value cannot be less then 0");
  });

it("test 4", () => {
    try {
    let value: number = -1;

      doubleIt(value);
    } catch (e) {
        if (e instanceof ValidationError) {
            expect(e).toBeInstanceOf(ValidationError)
        }
    }
  });
});
