describe("Class Relationship", () => {
  // javascript memperbolehkan memanggil class yang berbeda namun dengan properti yang sama untuk di panggil.
  // cukup membingungkan tapi begitulah javascript, sangat tidak di rekomendasikan untuk digunakan
  // karna akan membuat kita bingung di masa depan
  class Person {
    constructor(public name: string) {}
  }

  class Customer {
    constructor(public name: string) {}
  }

  it("test 1", () => {
    const person: Person = new Customer("budi");
    expect(person).toBeInstanceOf(Customer);
  });
  it("test 2", () => {
    const person: Person = new Person("budi");
    expect(person).toBeInstanceOf(Person);
  });
  it("test 3", () => {});
});
