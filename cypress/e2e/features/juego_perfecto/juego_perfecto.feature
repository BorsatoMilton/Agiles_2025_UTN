Feature: El juego perfecto
  Como usuario
  quiero ganar acertando todas las letras a la primera
  para ser un crack

  Scenario: Victoria perfecta sin errores
    Given la palabra "MANZANA" para juego perfecto
    When ingreso la letra "M" en juego perfecto
    And ingreso la letra "A" en juego perfecto
    And ingreso la letra "N" en juego perfecto
    And ingreso la letra "Z" en juego perfecto
    Then Deberia mostrarme que gane perfectamente