import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent {
nuevaContrasena!: string;
  email!: string;
  // contrasenaActual!: string;
  // contrasenaNueva!: string;

  // @Output() actualizarContrasena = new EventEmitter<{ contrasenaActual: string, contrasenaNueva: string }>();

  // guardarCambios(): void {
  //   this.actualizarContrasena.emit({
  //     contrasenaActual: this.contrasenaActual,
  //     contrasenaNueva: this.contrasenaNueva
  //   });
  // }
  

  constructor(private databaseService: DatabaseService) {}

  cambiarContrasena(email: string, nuevaContrasena: string) {
    this.databaseService.actualizarContrasena(email, nuevaContrasena);
  }

}
