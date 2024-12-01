describe("Super Constructor", () => {
  class Person {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    hello(): void {
      console.info(`brooo gue bukan manager`);
    }
  }

  class Manager extends Person {
    department: string;

    constructor(name: string, department: string) {
      super(name);
      this.department = department;
    }

    hello(): void {
    //   super.hello(); // kalau mau panggil method si parent nya
      console.info(`brooo gue manager nih`);
    }
  }

  it("should support super", () => {
    const manager: Manager = new Manager("brooo", "IT");

    expect(manager.name).toBe("brooo");
    expect(manager.department).toBe("IT");

    console.info(manager.hello());
  });
});
