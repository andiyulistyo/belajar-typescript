export namespace MathUtil {
  export const PI = 3.14;

  export function sum(...values: number[]): number {
    let total: number = 0;
    for (let value of values) {
      total += value;
    }

    return total;
  }
}


export namespace Foo {}

export namespace Boo {}