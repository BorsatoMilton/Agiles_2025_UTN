Feature: El peor juego
  Como usuario
  quiero fallar todas las letras
  para ver qué ocurre cuando no acierto ninguna

  @focus
  Scenario: Derrota total sin aciertos
    Given la palabra "MANZANA"
    When ingreso la letra "X"
    And ingreso la letra "Y"
    And ingreso la letra "Z"
    And ingreso la letra "W"
    And ingreso la letra "F"
    And ingreso la letra "Q"
    Then Deberia mostrarme que perdi
