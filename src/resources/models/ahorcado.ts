
interface Palabra {
  id: number;
  solution: string;
}

export class Ahorcado {
  private palabraSecreta = '';
  private letrasIngresadas = [] as string[];
  private letrasAcertadas = [] as string[];
  private letrasErradas = [] as string[];
  private intentosRealizados = 0;
  private maxIntentos = 6;
  private idioma = "spanish";
  private dificultad = "easy";

  constructor(palabraSecreta?: string, idioma?: string, dificultad?: string) {
    try {
      if (palabraSecreta != undefined) {
        this.palabraSecreta = palabraSecreta.toLowerCase();
      } else {
        this.idioma = idioma || 'spanish';
        this.dificultad = dificultad || 'easy';
        this.establecer_juego(this.idioma, this.dificultad);
      }
    } catch (error) {
      throw new Error('Error al establecer la palabra secreta: ' + error);
    }
  }

  private async establecer_juego(idioma: string, dificultad: string): Promise<void> {
    this.palabraSecreta = await this.nueva_palabra_secreta(idioma, dificultad);
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
      .split('')
      .map((l) => (this.letrasAcertadas.includes(l) ? l : '_'))
      .join('');
  } // Explico la funcion por si no se entiende: Toma la palabraSecreta,
  //  crea un array con sus letras (split), luego mapea con cada letra (map)
  // y verifica si estan incluidas, si estan devuelve la letra, caso contrario devuelve "-", y finalmente une todo en un string (join).
  public es_victoria_o_es_derrota(): 'victoria' | 'derrota' | 'en progreso' {
    if (this.mostrar_progreso_palabra() === this.palabraSecreta) {
      return 'victoria';
    } else if (this.intentosRealizados >= this.maxIntentos) {
      return 'derrota';
    }
    return 'en progreso';
  }

  public informar_letras_utilizadas(): string[] {
    return this.letrasIngresadas;
  }

  public informar_intentos_restantes(): number {
    return this.maxIntentos - this.intentosRealizados;
  }

  public informar_palabra_secreta(): string {
    return this.palabraSecreta;
  }

  public mostrar_letras_acertadas(): string[] {
    return this.letrasAcertadas;
  }

  public async reiniciar_juego(confirmacion: boolean): Promise<boolean> {
    if (confirmacion) {
      this.letrasIngresadas = [];
      this.letrasAcertadas = [];
      this.letrasErradas = [];
      this.intentosRealizados = 0;
      this.maxIntentos = 6;
      this.palabraSecreta = await this.nueva_palabra_secreta(this.idioma, this.dificultad);
      return true;
    }
    return false;
  }

  public letras_erradas(): string[] {
    return this.letrasErradas;
  }

  public no_permitir_ingresar_letras_si_el_juego_finalizo(): boolean {
    return this.es_victoria_o_es_derrota() !== 'en progreso';
  }

  private async nueva_palabra_secreta(
    idioma = 'spanish',
    dificultad = 'easy'
  ): Promise<string> {
    const { default: lista } = await import(`../languages/${idioma}-${dificultad}-words.json`);

    const palabras: Palabra[] = lista as Palabra[];

    const palabraAleatoria = palabras[Math.floor(Math.random() * palabras.length)];

    return palabraAleatoria.solution.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }
}
