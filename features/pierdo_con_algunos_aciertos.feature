Feature: Pierdo con algunos aciertos
  Como usuario
  quiero fallar varias veces y no lograr completar la palabra
  para ver cómo finaliza el juego en derrota

  Scenario: Derrota con algunos aciertos
    Given la palabra UVA
    When ingreso la letra u
    and ingreso la letra a
    and ingreso la letra c
    and ingreso la letra e
    and ingreso la letra t
    and ingreso la letra y
    and ingreso la letra p
    and ingreso la letra f
    Then Deberia mostrarme que perdi