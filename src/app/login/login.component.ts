import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ForgotComponent } from '../forgot/forgot.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formUser: FormGroup;
  usuarios: any[]=[];

    constructor (private router: Router) {
      this.formUser = new FormGroup({
        user: new FormControl('Valor que adopta user al construirse la clase'),
        email: new FormControl('pepo@gmail.com'),
        pass: new FormControl('1234567'),
      });

      this.usuarios = [
        {
          user: 'Pepe',
          email: 'pepe@gmail.com',
          pass: '1234'
        },
        {
          user: 'Pepa',
          email: 'pepa@gmail.com',
          pass: '12345'
        },
        {
          user: 'Pepi',
          email: 'pepi@gmail.com',
          pass: '123456'
        },
        {
          user: 'Pepo',
          email: 'pepo@gmail.com',
          pass: '1234567'
        }
      ]
    };

    procesar(){
      let email = this.formUser.controls['email'].value;
      let pass = this.formUser.controls['pass'].value;
  
      let usuarioValido = this.usuarios.find( validar => email === validar.email && pass === validar.pass)
  
      console.log(usuarioValido);
      if (usuarioValido) {
        this.router.navigate(['/home'], {});
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'El email o la contraseña son incorrectos',
        });
      }
    }

    actualizarContrasena(event: { contrasenaActual: string, contrasenaNueva: string }): void {
      const { contrasenaActual, contrasenaNueva } = event;
      const usuario = this.usuarios.find(u => u.pass === contrasenaActual);
    
      if (usuario) {
        usuario.pass = contrasenaNueva;
        console.log(this.usuarios); // Mostrar el array actualizado en la consola
      }
    }

  }
