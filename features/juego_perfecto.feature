Feature: El juego perfecto
  Como usuario
  quiero ganar acertando todas las letras a la primera
  para ser un crack

  Scenario: Victoria perfecta sin errores
    Given la palabra LIMON
    When ingreso la letra l
    and ingreso la letra i
    and ingreso la letra m
    and ingreso la letra o
    and ingreso la letra n
    Then Deberia mostrarme que gane