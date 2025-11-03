import { Ahorcado } from "./ahorcado";

describe("Ahorcado", () => {
  let juego = new Ahorcado("perro", 7);
  it("debería informar la palabra secreta correctamente", () => {
    expect(juego.informar_palabra_secreta()).toBe("perro");
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
      "-".repeat(juego.informar_palabra_secreta().length)
    ); //Mostraria "- - - - -"
  });

  it("Mostrar progreso de la palabra", () => {
    juego.adivinar_letra("g");
    expect(juego.mostrar_progreso_palabra()).toBe(
      "g" + "-".repeat(juego.informar_palabra_secreta().length - 1)
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

  it("Deberia mostrar las letras utilizadas", () => {
    expect(juego.informar_letras_utilizadas()).toEqual(["l", "u"]);
  });

  it("Deberia informar los intentos restantes", () => {
    expect(juego.informar_intentos_restantes()).toBe(3);
  });
});

// Reiniciar juego, hago una instancia completa con el juego ganado

describe("Ahorcado - Reiniciar juego", () => {
  let juego = new Ahorcado("casa", 5);
  juego.adivinar_letra("c");
  juego.adivinar_letra("a");
  juego.adivinar_letra("s");

  it("Deberia reiniciar el juego", () => {
    expect(juego.reiniciar_juego(true)).toBe(true);
  });
});

describe("Ahorcado - No Reiniciar juego", () => {
  let juego = new Ahorcado("casa", 5);
  juego.adivinar_letra("c");
  juego.adivinar_letra("a");
  juego.adivinar_letra("s");

  it("No deberia reiniciar el juego", () => {
    expect(juego.reiniciar_juego(false)).toBe(false);
  });
});

describe("Ahorcado - Mostrar letras acertadas", () => {
  let juego = new Ahorcado("barco", 5);
  juego.adivinar_letra("b");
  juego.adivinar_letra("a");
  juego.adivinar_letra("x"); // Letra errada

  it("Deberia mostrar las letras acertadas", () => {
    expect(juego.mostrar_letras_acertadas()).toEqual(["b", "a"]);
  });

  it("deberia informar letras erradas", () => {
    expect(juego.letras_erradas()).toEqual(["x"]);
  });

  it("no deberia permitir ingresar letras si el juego finalizo", () => {
    juego.adivinar_letra("r");
    juego.adivinar_letra("c");
    juego.adivinar_letra("o");
    expect(juego.no_permitir_ingresar_letras_si_el_juego_finalizo()).toBe(true);
  });

});


