import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent {
  contrasenaActual!: string;
  contrasenaNueva!: string;

  @Output() actualizarContrasena = new EventEmitter<{ contrasenaActual: string, contrasenaNueva: string }>();

  guardarCambios(): void {
    this.actualizarContrasena.emit({
      contrasenaActual: this.contrasenaActual,
      contrasenaNueva: this.contrasenaNueva
    });
  }
  

  constructor() {}

}
