Feature: El peor juego
  Como usuario
  quiero fallar todas las letras
  para ver qué ocurre cuando no acierto ninguna

  Scenario: Derrota total sin aciertos
    Given una palabra cualquiera
    When Intento con letras incorrectas todo el juego
    Then Deberia mostrarme que perdi

