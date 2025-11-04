import { Routes } from '@angular/router';
import { SelectorDificultadIdioma } from './components/selector-dificultad-idioma/selector-dificultad-idioma';
import { JuegoAhorcado } from './components/juego-ahorcado/juego-ahorcado';
export const routes: Routes = [
  { path: '', redirectTo: '/configuracion', pathMatch: 'full' },
  { path: 'configuracion', component: SelectorDificultadIdioma },
  { path: 'juego', component: JuegoAhorcado },
];
