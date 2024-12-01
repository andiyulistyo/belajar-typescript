describe("Interface inherent", () => {
  interface HasName {
    name: string;
  }

  interface SayHello {
    sayHello(name: string): void;
  }

  // implement interface
  class Person implements HasName, SayHello {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    sayHello(name: string): void {
      console.info(name);
    }
  }

  it("should support interface inherent", () => {
    const person: Person = new Person("cihuuu");
    person.sayHello("broo");
  });
});
