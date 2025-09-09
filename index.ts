export class Ahorcado {
    private palabraSecreta: string;
    private letrasIngresadas: string[] = [];
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
        if(!this.verificar_letra_ingresada(letra)) {
          letra = letra.toLowerCase();
          if (this.palabraSecreta.includes(letra)) {
            this.letrasIngresadas.push(letra);
            return true;
          } else {
            return false;
          }  
        } else {
          return false;
        }
        
    }
    public verificar_letra_ingresada(letra: string): boolean {
        letra = letra.toLowerCase();
        return this.letrasIngresadas.includes(letra);
    }
  }



