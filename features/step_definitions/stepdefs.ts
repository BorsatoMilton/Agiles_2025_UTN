import assert from 'assert';
import { Given, When, Then } from '@cucumber/cucumber';
import { Ahorcado } from '../../src/resources/models/ahorcado';

let ahorcado: Ahorcado;
let palabra: string;

//-------------------------------------- Escenario juego_perfecto.feature: victoria sin errores ----------------------------------------------------
Given('Una palabra cualquiera', function () {
  console.log('Given: Una palabra cualquiera');
  ahorcado = new Ahorcado(undefined, 'spanish', 'easy');
});

When('Adivino todas las letras', function () {
  console.log('When: Adivino todas las letras');
  palabra = ahorcado.informar_palabra_secreta();
  palabra.split('').forEach((letra) => ahorcado.adivinar_letra(letra));
});

Then('Deberia mostrarme que gane', function () {
  console.log('Then: Deberia mostrarme que gane');
  console.log('Estado del juego:', ahorcado.es_victoria_o_es_derrota());
  assert.strictEqual(ahorcado.es_victoria_o_es_derrota(), 'victoria');
});

// ------------------------------------------- Escenario el_peor_juego.feature: Derrota sin aciertos -------------------------------------------
Given('Una palabra cualquiera', function () {
  console.log('Given: Una palabra cualquiera');
  ahorcado = new Ahorcado(undefined, 'spanish', 'easy');
});

When('Intento con letras incorrectas todo el juego', function () {
  console.log('When: Intento con letras incorrectas todo el juego');
  palabra = ahorcado.informar_palabra_secreta()
  const letras_no_pertenecientes = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').filter((letra) => !palabra.includes(letra)).slice(0, 6).join('');
  letras_no_pertenecientes.split('').forEach((letra) => ahorcado.adivinar_letra(letra));
});

Then('Deberia mostrarme que perdi', function () {
  console.log('Then: Deberia mostrarme que perdi');
  console.log('Estado del juego:', ahorcado.es_victoria_o_es_derrota());
  assert.strictEqual(ahorcado.es_victoria_o_es_derrota(), 'derrota');
});

// ------------------------------------------- Escenario gano_con_algunos_errores.feature: victoria con algunos errores -------------------------------------------
Given('Una palabra cualquiera', function () {
  console.log('Given: Una palabra cualquiera');
  ahorcado = new Ahorcado(undefined, 'spanish', 'easy');
});
When('intento con letras incorrectas y luego completo la palabra', function () {
  console.log('When: intento con letras incorrectas y luego completo la palabra');
  palabra = ahorcado.informar_palabra_secreta();
  const letras_no_pertenecientes = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').filter((letra) => !palabra.includes(letra)).slice(0, 2).join(''); // Tomo solo 2 letras incorrectas, luego completo la palabra
  letras_no_pertenecientes.split('').forEach((letra) => ahorcado.adivinar_letra(letra));
  palabra.split('').forEach((letra) => ahorcado.adivinar_letra(letra));
});
// Then Deberia mostrarme que gane And Deberia mostrarme los intentos restantes
Then('Deberia mostrarme que gane', function () {
  console.log('Then: Deberia mostrarme que gane');
  console.log('Estado del juego:', ahorcado.es_victoria_o_es_derrota());
  assert.strictEqual(ahorcado.es_victoria_o_es_derrota(), 'victoria');
});
Then('Deberia mostrarme los intentos restantes', function () {
  console.log('Then: Deberia mostrarme los intentos restantes');
  console.log('Intentos restantes:', ahorcado.informar_intentos_restantes());
  assert.strictEqual(ahorcado.informar_intentos_restantes(), 0);
});

// --------------- Escenario pierdo_con_algunos_aciertos.feature: derrota con algunos aciertos -------------------------------------------
Given('Una palabra cualquiera', function () {
  console.log('Given: Una palabra cualquiera');
  ahorcado = new Ahorcado(undefined, 'spanish', 'easy');
});
When('Adivino algunas letras correctas y intento letras incorrectas', function () {
  console.log('When: Adivino algunas letras correctas y intento letras incorrectas');
  palabra = ahorcado.informar_palabra_secreta();
  const letras_correctas = palabra.split('').slice(0, 2).join(''); // Tomo solo 2 letras correctas
  const letras_no_pertenecientes = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').filter((letra) => !palabra.includes(letra)).slice(0, 6).join(''); // Tomo 6 letras incorrectas
  letras_correctas.split('').forEach((letra) => ahorcado.adivinar_letra(letra));
  letras_no_pertenecientes.split('').forEach((letra) => ahorcado.adivinar_letra(letra));
});
Then('Deberia mostrarme que perdi', function () {
  console.log('Then: Deberia mostrarme que perdi');
  console.log('Estado del juego:', ahorcado.es_victoria_o_es_derrota());
  assert.strictEqual(ahorcado.es_victoria_o_es_derrota(), 'derrota');
});
