Feature: Gano con algunos errores
  Como usuario
  quiero ganar aunque me equivoque algunas veces
  para demostrar que puedo recuperarme

  Scenario: Victoria con errores parciales
    Given la palabra PERA
    When ingreso la letra w
    and ingreso la letea h
    and ingreso la letea p
    and ingreso la letea e
    and ingreso la letea r
    and ingreso la letea a
    Then Deberia mostrarme que gane
    And Deberia mostrarme los intentos restantes