import {Ahorcado} from './index';

describe('Ahorcado', () => {
    
  let juego = new Ahorcado('perro', 7);
  it('debería guardar la palabra secreta correctamente', () => {
    expect(juego.guardar_palabra_secreta()).toBe('perro');
  });
});





