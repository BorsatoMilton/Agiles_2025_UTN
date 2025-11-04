import assert from 'assert';
import { Given, When, Then } from '@cucumber/cucumber';
import { Ahorcado } from '../../src/resources/models/ahorcado';

let ahorcado: Ahorcado;
let palabra: string;

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
