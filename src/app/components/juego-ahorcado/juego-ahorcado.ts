import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { Ahorcado } from '../../../resources/models/ahorcado';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { DialogReinicio } from '../dialog-reinicio/dialog-reinicio.js';

@Component({
  selector: 'app-juego-ahorcado',
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    DialogReinicio,
  ],
  templateUrl: './juego-ahorcado.html',
  styleUrl: './juego-ahorcado.css',
})
export class JuegoAhorcado implements OnInit {
  juego!: Ahorcado;
  palabraMostrada = '';
  idioma!: string;
  dificultad!: string;
  intentosRestantes!: number;
  letrasUtilizadas: string[] = [];
  letraIngresada: string = '';
  dialogReinicio: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.ngOnInit();
  }

  async ngOnInit() {
    this.idioma = this.route.snapshot.queryParamMap.get('idioma') || 'spanish';
    this.dificultad = this.route.snapshot.queryParamMap.get('dificultad') || 'easy';
    this.juego = new Ahorcado(undefined, this.idioma, this.dificultad);
    this.intentosRestantes = 6 - this.juego.get_cantidad_intentos_realizados();
    this.palabraMostrada = '_'.repeat(this.juego.informar_palabra_secreta().length);
  }

  mostrarProgreso() {
    this.palabraMostrada = this.juego.mostrar_progreso_palabra();
  }

  mostrar_letras_usadas(): void {
    this.letrasUtilizadas = this.juego.informar_letras_utilizadas();
  }

  adivinarLetra(letra: string) {
    this.juego.adivinar_letra(letra);
    this.mostrarProgreso();
    this.mostrar_letras_usadas();
    this.intentosRestantes = 6 - this.juego.get_cantidad_intentos_realizados();
    this.letraIngresada = '';
    if (
      this.intentosRestantes <= 0 ||
      this.palabraMostrada === this.juego.informar_palabra_secreta()
    ) {
      this.dialogReinicio = true;
    }
  }

  verificarLetra(letra: string): boolean {
    return this.juego.verificar_letra_ingresada_repetida(letra);
  }

  reiniciarJuego(confirmation: boolean) {
    if (!confirmation) {
      this.router.navigate([''], {});
    } else {
      this.juego = new Ahorcado(undefined, this.idioma, this.dificultad);
      this.mostrarProgreso();
      this.intentosRestantes = 6;
      this.letrasUtilizadas = [];
      this.letraIngresada = '';
    }
  }
}
