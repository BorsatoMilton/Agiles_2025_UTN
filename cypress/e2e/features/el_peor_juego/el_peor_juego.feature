Feature: El peor juego
  Como usuario
  quiero fallar todas las letras
  para ver qué ocurre cuando no acierto ninguna

  @focus
  Scenario: Derrota total sin aciertos
    Given la palabra "MANZANA" 1
    When ingreso la letra "X" en el peor juego
    And ingreso la letra "Y" en el peor juego
    And ingreso la letra "R" en el peor juego
    And ingreso la letra "W" en el peor juego
    And ingreso la letra "F" en el peor juego
    And ingreso la letra "Q" en el peor juego
    Then Deberia mostrarme que perdi y volver al menú