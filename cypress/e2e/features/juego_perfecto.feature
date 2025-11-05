Feature: El juego perfecto
  Como usuario
  quiero ganar acertando todas las letras a la primera
  para ser un crack

  Scenario: Victoria perfecta sin errores
    Given la palabra "MANZANA"
    When ingreso la letra "M"
    And ingreso la letra "A"
    And ingreso la letra "N"
    And ingreso la letra "Z"
    Then Deberia mostrarme que gane
