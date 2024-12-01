describe("Class", function () {
  class Customer {
    id: string;
    name: string = "";

    constructor() {
      console.info("Create new customer");
    }
  }

  class Store {
    readonly id: string;
    name: string;
    address?: string;

    constructor(id: string, name: string) {
      this.id = id;
      this.name = name;
    }

    hello(name: string): string {
      return `broo ${name}`;
    }

    hellos(name: string): void {
      console.info(`broo ${name}`);
    }
  }

  it("should can create a class", function () {
    const person: Customer = new Customer();
    const store: Store = new Store("1", "broo");
    store.address = "asdf";
    console.info(person);
    console.info(store);
  });

  it("should can create method", function () {
    const store: Store = new Store("1", "brew");

    expect(store.hello("breww")).toBe("broo breww");
  });
});
