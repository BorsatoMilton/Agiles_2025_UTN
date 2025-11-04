Feature: El juego perfecto
  Como usuario
  quiero ganar acertando todas las letras a la primera
  para ser un crack

  Scenario: Victoria perfecta sin errores
    Given Una palabra cualquiera
    When Adivino todas las letras
    Then Deberia mostrarme que gane