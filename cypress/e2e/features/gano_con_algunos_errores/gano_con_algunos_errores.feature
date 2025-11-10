Feature: Gano con algunos errores
  Como usuario
  quiero ganar aunque me equivoque algunas veces
  para demostrar que puedo recuperarme

  Scenario: Victoria con errores parciales
    Given la palabra "LIMON" 2
    When ingreso la letra "W" con errores
    And ingreso la letra "H" con errores
    Then deberia tener 4 intentos restantes en victoria
    When ingreso la letra "L" con errores
    And ingreso la letra "I" con errores
    And ingreso la letra "M" con errores
    And ingreso la letra "O" con errores
    And ingreso la letra "N" con errores
    Then Deberia mostrarme que gane con errores y reiniciar el juego