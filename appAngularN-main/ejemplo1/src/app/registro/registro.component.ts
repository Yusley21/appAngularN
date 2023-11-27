// registro.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';  // Asegúrate de importar tu servicio de autenticación

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  constructor(private authService: AuthService) {}

  register(
    username: string,
    password: string,
    confirmPassword: string,
    phone: string,
    birthdate: string,
    email: string,
    name: string
  ) {
    // Verificar si las contraseñas coinciden
    if (password !== confirmPassword) {
      console.error('Las contraseñas no coinciden');
      return;
    }

    const userData = {
      username: username,
      password: password,
      confirmPassword: confirmPassword,
      phone: phone,
      birthdate: birthdate,
      email: email,
      name: name
      // Agrega otros campos necesarios para el registro
    };

    this.authService.register(userData).subscribe(
      (response) => {
        // Manejar la respuesta exitosa (por ejemplo, redirección a otra página)
        console.log('Registro exitoso:', response);
      },
      (error) => {
        // Manejar errores (puedes mostrar un mensaje de error al usuario)
        console.error('Error en el registro:', error);
      }
    );
  }
}


