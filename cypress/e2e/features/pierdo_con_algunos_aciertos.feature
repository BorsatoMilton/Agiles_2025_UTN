Feature: Pierdo con algunos aciertos
  Como usuario
  quiero fallar varias veces y no lograr completar la palabra
  para ver cómo finaliza el juego en derrota

  Scenario: Derrota con algunos aciertos
    Given la palabra "MANZANA"
    When ingreso la letra "M"
    And ingreso la letra "A"
    And ingreso la letra "C"
    And ingreso la letra "E"
    And ingreso la letra "T"
    And ingreso la letra "Y"
    And ingreso la letra "P"
    And ingreso la letra "F"
    Then Deberia mostrarme que perdi
