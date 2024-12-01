describe("Parameter", () => {

    class Person {

        constructor(public name : string) {
        }
    }

    it("should support propertie", () => {
        const person = new Person("sunraku");

        expect(person.name).toBe("sunraku");
    })
})