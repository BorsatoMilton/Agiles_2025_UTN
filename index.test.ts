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
    expect(juego.mostrar_progreso_palabra()).toBe(
      "-".repeat(juego.guardar_palabra_secreta().length)
    ); //Mostraria "- - - - -"
  });

  it("Mostrar progreso de la palabra", () => {
    juego.adivinar_letra("g");
    expect(juego.mostrar_progreso_palabra()).toBe(
      "g" + "-".repeat(juego.guardar_palabra_secreta().length - 1)
    );
  });

  it("Sumar intento si erra la letra", () => {
    juego.adivinar_letra("x");
    expect(juego.get_cantidad_intentos_realizados()).toBe(1);
  });

  it("Mantener cantidad de intentos si acierta la letra", () => {
    juego.adivinar_letra("a");
    expect(juego.get_cantidad_intentos_realizados()).toBe(1);
  });

  it("Deberia informar que el usuario gano", () => {
    juego.adivinar_letra("t");
    juego.adivinar_letra("o");
    expect(juego.es_victoria_o_es_derrota()).toBe("victoria");
  });
  

});

describe("Ahorcado - Test de derrota", () => {
  let juego = new Ahorcado("sol", 3);

  it("Deberia informar que el usuario perdio", () => {
    juego.adivinar_letra("x");
    juego.adivinar_letra("y");
    juego.adivinar_letra("z");
    expect(juego.es_victoria_o_es_derrota()).toBe("derrota");
  });
});

describe("Ahorcado - Test en progreso", () => {
  let juego = new Ahorcado("luna", 3);

  it("Deberia informar que el juego esta en progreso", () => {
    juego.adivinar_letra("l");
    juego.adivinar_letra("u");
    expect(juego.es_victoria_o_es_derrota()).toBe("en progreso");
  });
});
