export class Ahorcado {
  private palabraSecreta: string;
  private letrasIngresadas: string[] = [];
  private letrasAcertadas: string[] = [];
  private letrasErradas: string[] = [];
  private intentosRealizados: number = 0;
  private maxIntentos: number;

  constructor(palabraSecreta: string, maxIntentos: number = 6) {
    this.palabraSecreta = palabraSecreta.toLowerCase();
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
        this.intentosRealizados++;
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

  public get_cantidad_intentos_realizados(): number {
    return this.intentosRealizados;
  }

  public mostrar_progreso_palabra(): string {
    return this.palabraSecreta
      .split("")
      .map((l) => (this.letrasAcertadas.includes(l) ? l : "-"))
      .join("");
  } // Explico la funcion por si no se entiende: Toma la palabraSecreta,
  //  crea un array con sus letras (split), luego mapea con cada letra (map)
  // y verifica si estan incluidas, si estan devuelve la letra, caso contrario devuelve "-", y finalmente une todo en un string (join).
}
