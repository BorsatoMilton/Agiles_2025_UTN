import assert from 'assert';
import { Given, When, Then } from '@cucumber/cucumber';
import { Ahorcado } from '../../src/resources/ahorcado';
let ahorcado;
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

// ------------------------------------------- Escenario el_peor_juego.feature: Derrota sin aciertos -------------------------------------------
Given('La palabra MANGO', function () {
    console.log('Given: La palabra MANGO');
    ahorcado = new Ahorcado('mango');
});
When('Intento con letras incorrectas todo el juego', function () {
    console.log('When: Intento con letras incorrectas todo el juego');
    const letras_incorrectas = ['X', 'Y', 'Z', 'W', 'V', 'U'];
    letras_incorrectas.forEach((letra) => ahorcado.adivinar_letra(letra));
});
Then('Deberia mostrarme que perdi', function () {
    console.log('Then: Deberia mostrarme que perdi');
    console.log('Estado del juego:', ahorcado.es_victoria_o_es_derrota());
    assert.strictEqual(ahorcado.es_victoria_o_es_derrota(), 'derrota');
});
// ------------------------------------------- Escenario gano_con_algunos_errores.feature: victoria con algunos errores -------------------------------------------
Given('La palabra PERA', function () {
    console.log('Given: La palabra PERA');
    ahorcado = new Ahorcado('pera');
});
When('Adivino algunas letras correctas y otras incorrectas', function () {
    console.log('When: Adivino algunas letras correctas y otras incorrectas');
    const letras_a_adivinar = ['P', 'E', 'X', 'Y', 'Z'];
    letras_a_adivinar.forEach((letra) => ahorcado.adivinar_letra(letra));
});
Then('Deberia mostrarme que gane', function () {
    console.log('Then: Deberia mostrarme que gane');
    console.log('Estado del juego:', ahorcado.es_victoria_o_es_derrota());
    assert.strictEqual(ahorcado.es_victoria_o_es_derrota(), 'victoria');
});
// ------------------------------------------- Escenario pierdo_con_algunos_aciertos.feature: Derrota con algunos aciertos -------------------------------------------
Given('La palabra MANGO', function () {
    console.log('Given: La palabra MANGO');
    ahorcado = new Ahorcado('mango');
});
When('Adivino algunas letras correctas y intento letras incorrectas', function () {
    console.log('When: Adivino algunas letras correctas y intento letras incorrectas');
    const letras_a_adivinar = ['M', 'A', 'X', 'Y', 'Z', 'W', 'V', 'U'];
    letras_a_adivinar.forEach((letra) => ahorcado.adivinar_letra(letra));
});
Then('Deberia mostrarme que perdi', function () {
    console.log('Then: Deberia mostrarme que perdi');
    console.log('Estado del juego:', ahorcado.es_victoria_o_es_derrota());
    assert.strictEqual(ahorcado.es_victoria_o_es_derrota(), 'derrota');
});