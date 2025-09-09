import {Ahorcado} from './index';

describe('Ahorcado', () => {
    
  let juego = new Ahorcado('perro', 7);
  it('debería guardar la palabra secreta correctamente', () => {
    expect(juego.guardar_palabra_secreta()).toBe('perro');
  });

  it('debería adivinar una letra correctamente', () => {
    expect(juego.adivinar_letra('p')).toBe(true);
    expect(juego.adivinar_letra('x')).toBe(false);
  });

  it('deberia verificar si una letra ya fue ingresada', () => {
    juego.adivinar_letra('p');
    expect(juego.verificar_letra_ingresada('p')).toBe(true);
  });
});





