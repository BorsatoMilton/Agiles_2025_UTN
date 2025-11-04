Feature: Pierdo con algunos aciertos
  Como usuario
  quiero fallar varias veces y no lograr completar la palabra
  para ver cómo finaliza el juego en derrota

  Scenario: Derrota con algunos aciertos
    Given una palabra cualquiera
    When Adivino algunas letras correctas y intento letras incorrectas
    And Supero el limite de intentos
    Then Deberia mostrarme que perdi
