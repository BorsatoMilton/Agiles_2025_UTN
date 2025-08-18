import { Sumador } from "./index";

describe("sumador dos numeros enteros", () => {
  let sumador = new Sumador("1,2");

  it("Debe definirse el texto", () => {
    expect(sumador.texto).toBeDefined();
  });

  it("Debe sumar los números del texto dando como resultado 3", () => {
    expect(sumador.sumar()).toBe(3);
  });
});
