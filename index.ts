export class Sumador {
  texto: string;
  arreglo_numeros: number[] = [];

  public constructor(texto: string) {
    this.texto = texto;
  }

  public sumar(): number {
    const suma = this.texto
      .split(",")
      .map((num) => (num.trim() !== "" ? parseInt(num) : 0))
      .reduce((acumulador, valor) => acumulador + valor, 0);

    return suma;
  }
}
