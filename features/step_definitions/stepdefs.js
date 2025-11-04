import assert from 'assert';
import { Given, When, Then } from '@cucumber/cucumber';
import { Ahorcado } from '../../src/resources/models/ahorcado';
let ahorcado;
let palabra;
Given(/una palabra cualquiera/i, function () {
  console.log('Given: Una palabra cualquiera');
  ahorcado = new Ahorcado(undefined, 'spanish', 'easy');
});
When(/adivino todas las letras/i, function () {
  console.log('When: Adivino todas las letras');
  palabra = ahorcado.informar_palabra_secreta();
  palabra.split('').forEach((letra) => ahorcado.adivinar_letra(letra));
});
When(/intento con letras incorrectas todo el juego/i, function () {
  console.log('When: Intento con letras incorrectas todo el juego');
  palabra = ahorcado.informar_palabra_secreta();
  const letras_no_pertenecientes = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    .split('')
    .filter((letra) => !palabra.includes(letra));
  for (const letra of letras_no_pertenecientes) {
    if (ahorcado.informar_intentos_restantes() <= 0) break;
    ahorcado.adivinar_letra(letra);
  }
});
When(/intento con letras incorrectas y luego completo la palabra/i, function () {
  console.log('When: intento con letras incorrectas y luego completo la palabra');
  palabra = ahorcado.informar_palabra_secreta();
  const letras_no_pertenecientes = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    .split('')
    .filter((letra) => !palabra.includes(letra))
    .slice(0, 2)
    .join('');
  letras_no_pertenecientes.split('').forEach((letra) => ahorcado.adivinar_letra(letra));
  palabra.split('').forEach((letra) => ahorcado.adivinar_letra(letra));
});
When(/adivino algunas letras correctas y intento letras incorrectas/i, function () {
  console.log('When: Adivino algunas letras correctas y intento letras incorrectas');
  palabra = ahorcado.informar_palabra_secreta();
  const letras_correctas = palabra.split('').slice(0, 2).join('');
  const letras_no_pertenecientes = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    .split('')
    .filter((letra) => !palabra.includes(letra));
  for (const letra of letras_correctas.split('')) {
    ahorcado.adivinar_letra(letra);
  }
  for (const letra of letras_no_pertenecientes) {
    if (ahorcado.informar_intentos_restantes() <= 0) break;
    ahorcado.adivinar_letra(letra);
  }
});
When(/supero el limite de intentos/i, function () {
  console.log('When: Supero el limite de intentos');
  palabra = ahorcado.informar_palabra_secreta();
  const letras_no_pertenecientes = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    .split('')
    .filter((letra) => !palabra.includes(letra));
  for (const letra of letras_no_pertenecientes) {
    if (ahorcado.informar_intentos_restantes() <= 0) break;
    ahorcado.adivinar_letra(letra);
  }
});
Then(/deberia mostrarme que gane/i, function () {
  console.log('Then: Deberia mostrarme que gane');
  console.log('Estado del juego:', ahorcado.es_victoria_o_es_derrota());
  assert.strictEqual(ahorcado.es_victoria_o_es_derrota(), 'victoria');
});
Then(/deberia mostrarme que perdi/i, function () {
  console.log('Then: Deberia mostrarme que perdi');
  console.log('Estado del juego:', ahorcado.es_victoria_o_es_derrota());
  assert.strictEqual(ahorcado.es_victoria_o_es_derrota(), 'derrota');
});
Then(/deberia mostrarme los intentos restantes/i, function () {
  console.log('Then: Deberia mostrarme los intentos restantes');
  console.log('Intentos restantes:', ahorcado.informar_intentos_restantes());
  assert.strictEqual(typeof ahorcado.informar_intentos_restantes(), 'number');
});
