export class Ahorcado {
  private palabraSecreta: string;
  private letrasIngresadas: string[] = [];
  private letrasAcertadas: string[] = [];
  private letrasErradas: string[] = [];
  private intentosRestantes: number;
  private maxIntentos: number;

  constructor(palabraSecreta: string, maxIntentos: number = 6) {
    this.palabraSecreta = palabraSecreta.toLowerCase();
    this.intentosRestantes = maxIntentos;
    this.maxIntentos = maxIntentos;
  }

  public guardar_palabra_secreta(): string {
    return this.palabraSecreta;
  }

  public adivinar_letra(letra: string): boolean {
    if (!this.verificar_letra_ingresada_repetida(letra)) {
      letra = letra.toLowerCase();
      this.letrasIngresadas.push(letra);
      if (this.palabraSecreta.includes(letra)) {
        this.letrasAcertadas.push(letra);
        return true;
      } else {
        this.letrasErradas.push(letra);
        return false;
      }
    } else {
      return false;
    }
  }
  public verificar_letra_ingresada_repetida(letra: string): boolean {
    letra = letra.toLowerCase();
    return this.letrasIngresadas.includes(letra);
  }
}
