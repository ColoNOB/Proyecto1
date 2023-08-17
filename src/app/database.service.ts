import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private usuarios: { email: string, contrasena: string} [] = [];

  constructor() { }

  actualizarContrasena(email: string, nuevaContrasena: string) {
    const usuario = this.usuarios.find(u => u.email === email);
    if (usuario) {
      usuario.contrasena = nuevaContrasena;
    }
  }
}
