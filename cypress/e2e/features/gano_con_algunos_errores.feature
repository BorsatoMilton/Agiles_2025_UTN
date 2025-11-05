Feature: Gano con algunos errores
  Como usuario
  quiero ganar aunque me equivoque algunas veces
  para demostrar que puedo recuperarme

  Scenario: Victoria con errores parciales
    Given la palabra "MANZANA"
    When ingreso la letra "W"
    And ingreso la letra "H"
    And ingreso la letra "M"
    And ingreso la letra "A"
    And ingreso la letra "N"
    And ingreso la letra "Z"
    Then Deberia mostrarme que gane
    And Deberia mostrarme los intentos restantes
