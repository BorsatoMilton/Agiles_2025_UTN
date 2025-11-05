Feature: Pierdo con algunos aciertos
  Como usuario
  quiero fallar varias veces y no lograr completar la palabra
  para ver cómo finaliza el juego en derrota

  Scenario: Derrota con algunos aciertos
    Given la palabra "MANZANA" con aciertos
    When ingreso la letra "M" con aciertos
    And ingreso la letra "A" con aciertos
    And ingreso la letra "C" con aciertos
    And ingreso la letra "E" con aciertos
    And ingreso la letra "T" con aciertos
    And ingreso la letra "Y" con aciertos
    And ingreso la letra "P" con aciertos
    And ingreso la letra "F" con aciertos
    Then Deberia mostrarme que perdi con aciertos