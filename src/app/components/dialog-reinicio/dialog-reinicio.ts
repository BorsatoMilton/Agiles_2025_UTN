import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-reinicio',
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './dialog-reinicio.html',
  styleUrl: './dialog-reinicio.css',
})
export class DialogReinicio {}
