describe("Visibility", () => {
  // Public       > bisa di akses dimanapun, default pasti ini
  // private      > hanya bisa diakses oleh class nya sendiri
  // protected    > sama seperti private, tapi bisa juga di akses oleh turunan classnya

  class Person {
    protected name: string;
    protected address?: string;

    constructor(name: string) {
      this.name = name;
    }

    getName(): string {
      return this.name;
    }

    getAddress() {
      return this.address;
    }
  }

  class Manager extends Person {}

  it("Should support visibility", () => {
    const person: Person = new Person("brroo");

    expect(person.getName()).toBe("brroo");
  });

  it("Should support visibility protected", () => {
    const manager: Manager = new Manager("broo");

    expect(manager.getName()).toBe("broo");
    // expect(manager.getAddress).toBe("brroo");
  });
});
