// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  login() {
    // Obtén los valores del formulario
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    // Verifica que se hayan ingresado tanto el nombre de usuario como la contraseña
    if (username && password) {
      // Crea un objeto con los datos del usuario
      const userData = {
        username: username,
        password: password
        // Otros campos necesarios para el inicio de sesión
      };

      // Llama al servicio de autenticación para iniciar sesión
      this.authService.login(userData).subscribe(
        (response) => {
          // Maneja la respuesta exitosa
          console.log('Inicio de sesión exitoso:', response);
          // Aquí podrías redirigir al usuario a otra página, por ejemplo, el panel de control.
        },
        (error) => {
          // Maneja los errores
          console.error('Error en el inicio de sesión:', error);
        }
      );
    } else {
      // Maneja el caso en el que no se hayan ingresado tanto el nombre de usuario como la contraseña
      console.error('Por favor, ingresa tanto el nombre de usuario como la contraseña.');
    }
  }
}
