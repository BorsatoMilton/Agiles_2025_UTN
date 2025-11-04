import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-selector-dificultad-idioma',
  imports: [MatFormFieldModule, MatSelectModule, MatButtonModule],
  templateUrl: './selector-dificultad-idioma.html',
  styleUrl: './selector-dificultad-idioma.css',
})
export class SelectorDificultadIdioma {
  idiomas = ['spanish', 'english', 'french', 'portuguese'];
  dificultades = ['easy', 'medium', 'hard'];
}
