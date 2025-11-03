import assert from 'assert';
import { Given, When, Then } from '@cucumber/cucumber';
import { Ahorcado } from '../../src/resources/models/ahorcado';

let ahorcado: Ahorcado;
const letras = ['M', 'A', 'N', 'Z'];

Given('La palabra MANZANA', function () {
  console.log('Given: La palabra MANZANA');
  ahorcado = new Ahorcado('manzana');
});

When('Adivino todas las letras', function () {
  console.log('When: Adivino todas las letras');
  letras.forEach((letra) => ahorcado.adivinar_letra(letra));
});

Then('Deberia mostrarme que gane', function () {
  console.log('Then: Deberia mostrarme que gane');
  console.log('Estado del juego:', ahorcado.es_victoria_o_es_derrota());
  assert.strictEqual(ahorcado.es_victoria_o_es_derrota(), 'victoria');
});
