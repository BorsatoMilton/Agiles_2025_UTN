import { Ahorcado } from "./index";

describe("Ahorcado", () => {
  let juego = new Ahorcado("perro", 7);
  it("debería guardar la palabra secreta correctamente", () => {
    expect(juego.guardar_palabra_secreta()).toBe("perro");
  });

  it("debería adivinar una letra correctamente", () => {
    expect(juego.adivinar_letra("p")).toBe(true);
  });

  it("deberia verificar si una letra ya fue ingresada", () => {
    juego.adivinar_letra("p");
    expect(juego.verificar_letra_ingresada_repetida("p")).toBe(true);
  });

  it("Errar letra", () => {
    expect(juego.adivinar_letra("x")).toBe(false);
  });
});

//Necesito una instancia nueva para no interferir con los otros tests

describe("Ahorcado - Nuevos tests", () => {
  let juego = new Ahorcado("gato", 0);

  it("Iniciar contador nulo", () => {
    expect(juego.get_cantidad_intentos_realizados()).toBe(0);
  });

  it("Palabra inicial con guiones", () => {
    expect(juego.mostrar_palabra_inicial_usuario()).toBe(
      "-".repeat(juego.guardar_palabra_secreta().length)
    ); //Mostraria "- - - - -"
  });
});
