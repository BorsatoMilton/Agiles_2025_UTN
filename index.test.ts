import { Sumador } from "./index";

describe("sumador", () => {
  let sumador = new Sumador("1,2");

  it("Debe definirse el texto", () => {
    expect(sumador.texto).toBeDefined();
  });

  it("Debe sumar los números del texto", () => {
    expect(sumador.sumar()).toBe(3);
  });
});
