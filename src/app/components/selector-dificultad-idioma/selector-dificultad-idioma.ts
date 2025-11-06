import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-selector-dificultad-idioma',
  imports: [MatFormFieldModule, MatSelectModule, MatButtonModule, ReactiveFormsModule,  MatDividerModule],
  templateUrl: './selector-dificultad-idioma.html',
  styleUrl: './selector-dificultad-idioma.css',
})
export class SelectorDificultadIdioma {
  idiomas = ['spanish', 'english', 'french', 'portuguese'];
  dificultades = ['easy', 'medium', 'hard'];
  idiomaSeleccionado: string = this.idiomas[0];
  dificultadSeleccionada: string = this.dificultades[0];
  formAhorcado: FormGroup;

  constructor(private router: Router) {
    this.formAhorcado = new FormGroup({
      idioma: new FormControl(this.idiomaSeleccionado),
      dificultad: new FormControl(this.dificultadSeleccionada),
    });
  }

  async iniciar_juego() {
    const idioma = this.formAhorcado.get('idioma')?.value;
    const dificultad = this.formAhorcado.get('dificultad')?.value;
    this.router.navigate(['/juego'], { queryParams: { idioma, dificultad } });
  }
}
