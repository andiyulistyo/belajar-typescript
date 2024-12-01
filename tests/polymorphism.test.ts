describe("Test Polymorphism", () => {
  class Employee {
    constructor(public name: string) {}
  }

  class Manager extends Employee {}

  class VicePresident extends Manager {}

  function hello(employee: Employee) {
    // type cast
    if (employee instanceof VicePresident) {
      const vice = employee as VicePresident;
      return `Hello Vice President ${employee.name}`;
    } else if (employee instanceof Manager) {
      const vice = employee as Manager;
      return `Hello Manager ${employee.name}`;
    } else {
      return `Hello Employee ${employee.name}`;
    }
  }

  it("test employee", () => {
    let employee: Employee = new Employee("Andre");

    expect(employee).toBeInstanceOf(Employee);
    expect(hello(employee)).toBe("Hello Employee Andre");
  });

  it("test manager", () => {
    let manager: Employee = new Manager("Andre");
    expect(manager).toBeInstanceOf(Manager);
    expect(hello(manager)).toBe("Hello Manager Andre");
  });

  it("test vice president", () => {
    let vice: Employee = new VicePresident("Andre");
    expect(vice).toBeInstanceOf(VicePresident);
    expect(hello(vice)).toBe("Hello Vice President Andre");
  });
});
