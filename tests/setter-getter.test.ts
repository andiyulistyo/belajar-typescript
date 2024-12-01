describe("Setter Getter", function () {
  class Person {
    _name?: string;

    set name(name: string) {
      if (this._name !== "") {
        this._name = name;
      }
    }

    get name(): string {
      if (this._name) {
        return this._name;
      } else {
        return "empty";
      }
    }
  }

  it("should support setter getter", function () {
    const person: Person = new Person();
    person.name = "broo";

    expect(person.name).toBe("broo");
  });
});
