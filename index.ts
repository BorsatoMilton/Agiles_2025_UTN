export class Ahorcado {
    private palabraSecreta: string;
    private letrasAdivinadas: Set<string>;
    private intentosRestantes: number;   
    private maxIntentos: number; 
    

    constructor(palabraSecreta: string, maxIntentos: number = 6) {
        this.palabraSecreta = palabraSecreta.toLowerCase();
        this.letrasAdivinadas = new Set();
        this.intentosRestantes = maxIntentos;
        this.maxIntentos = maxIntentos;
    }

    public guardar_palabra_secreta(): string {
        return this.palabraSecreta;
    }
}



