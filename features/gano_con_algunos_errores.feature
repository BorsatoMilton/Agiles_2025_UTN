Feature: Gano con algunos errores
  Como usuario
  quiero ganar aunque me equivoque algunas veces
  para demostrar que puedo recuperarme

  Scenario: Victoria con errores parciales
    Given una palabra cualquiera
    When intento con letras incorrectas y luego completo la palabra
    Then Deberia mostrarme que gane
    And Deberia mostrarme los intentos restantes
