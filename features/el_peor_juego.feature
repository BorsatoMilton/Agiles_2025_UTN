Feature: El peor juego
  Como usuario
  quiero fallar todas las letras
  para ver qué ocurre cuando no acierto ninguna

  Scenario: Derrota total sin aciertos
    Given la palabra manzana
    When ingreso la letra x
    And ingreso la letra y
    And ingreso la letra z
    And ingreso la letra w 
    And ingreso la letra f
    And ingreso la letra q
    Then Deberia mostrarme que perdi

