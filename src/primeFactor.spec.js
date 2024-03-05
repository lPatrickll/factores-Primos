import sumar from "./sumador.js";

describe("generar factor", () => {
  it("deberia sumar dos", () => {
    let primefactors = new PrimeFactos();
    expect(primefactors.generate(1)).toEqual([]);
  });
});

class PrimeFactos {
    generate(n) {
        return [];
    }
}