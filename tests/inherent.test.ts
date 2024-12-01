describe("Inherent", function () {
  class Employee {
    _name: string;

    constructor(name: string) {
      this._name = name;
    }

    get name() {
        return this._name;
    }
  }

  class Manager extends Employee {

  }

  class Director extends Manager {

  }

  it("should support inherent", function () {
    const employee : Employee = new Employee("bbreww")
    expect(employee.name).toBe("bbreww")

    const manager : Manager = new Manager("wadidau")
    expect(manager.name).toBe("wadidau")

    const director : Director = new Manager("icikiwirr")
    expect(director.name).toBe("icikiwirr")
  })
});
