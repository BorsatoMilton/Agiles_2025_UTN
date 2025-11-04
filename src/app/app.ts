import { Component, signal } from '@angular/core';
import { SelectorDificultadIdioma } from './components/selector-dificultad-idioma/selector-dificultad-idioma.js';

@Component({
  selector: 'app-root',
  imports: [SelectorDificultadIdioma],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('ahorcado');
}
