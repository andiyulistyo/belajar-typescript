describe("Type Of", () => {
  class Employee {}

  class Manager {}

  const arman = new Employee();
  const aman = new Manager();

  it("should support instance of", () => {

    expect(arman).toBeInstanceOf(Employee);
    expect(aman).toBeInstanceOf(Manager);
  });

  it("should support instance of 2", () => {

    expect(aman instanceof Employee).toBe(false);
    expect(arman instanceof Manager).toBe(false);
  });

});
