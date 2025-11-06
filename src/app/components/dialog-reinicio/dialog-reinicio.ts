import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
} from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';

interface DialogData {
  resultado: string;
  palabraSecreta: string;
}

@Component({
  selector: 'app-dialog-reinicio',
  imports: [MatButtonModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatDividerModule],
  templateUrl: './dialog-reinicio.html',
  styleUrl: './dialog-reinicio.css',
})
export class DialogReinicio implements OnInit {
  resultado: string = '';
  palabraSecreta: string = '';
  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: DialogData,
    public dialogRef: MatDialogRef<DialogReinicio>
  ) {}

  ngOnInit(): void {
    this.resultado = this.dialogData.resultado;
    this.palabraSecreta = this.dialogData.palabraSecreta;
  }

  onClose(): void {
    this.dialogRef.close('none');
  }

  reiniciarJuego(): void {
    this.dialogRef.close('reiniciar');
  }
}
