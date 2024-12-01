describe("Abstrac test ", () => {

    abstract class Customer {
        readonly id : number;
        abstract name : string;

        constructor(id : number) {
            this.id = id;
        }

        hellobro(name: string) {
            return `hello bro ${name}`;
        }

        abstract hello(name : string) : string;
    }

    class RegularCustomer extends Customer {
        name: string;

        constructor(id: number, name: string) {
            super(id)
            this.name = name
        }

        hello(name: string): string {
            return `hello ${name}, my name is ${this.name}`;
        }
    }



    it("should support", () => {
        const budi = new RegularCustomer(1, "budi");
        expect(budi.hello("andre")).toBe("hello andre, my name is budi");
    })
});