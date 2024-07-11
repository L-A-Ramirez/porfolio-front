import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombre_usuario!: string;
  password !: string;
  roles : string[] = [];
  errorMsj!: string;
  

  constructor(private tokenService: TokenService, 
    private authService: AuthService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
    // Verificar que los campos no estén vacíos
    if (!this.nombre_usuario || !this.password) {
      this.errorMsj = 'Por favor, ingrese su nombre de usuario y contraseña';
      return;
    }
  
    // Crear un nuevo objeto LoginUsuario
    this.loginUsuario = new LoginUsuario(this.nombre_usuario, this.password);
  
    // Llamar al servicio de autenticación
    this.authService.login(this.loginUsuario).subscribe(
      (data) => {
        // Establecer variables de estado
        this.isLogged = true;
        this.isLogginFail = false;
  
        // Establecer token y datos de usuario en el servicio de token
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombre_usuario);
        this.tokenService.setAuthorities(data.authorities);
  
        // Establecer roles
        this.roles = data.authorities;
  
        // Navegar a la ruta raíz
        this.router.navigate(['']);
  
        console.log('Estoy dentro de login');
      },
      (err) => {
        // Establecer variables de estado
        this.isLogged = false;
        this.isLogginFail = true;
  
        // Verificar que el error tenga una propiedad mensaje
        if (err.error && err.error.mensaje) {
          this.errorMsj = err.error.mensaje;
        } else {
          this.errorMsj = 'Error desconocido';
        }
  
        console.log(this.errorMsj);
        console.log('Estoy en el error del loggin');
        console.error('Error al iniciar sesión:', err);
        
        if (err.status === 401) {
          this.errorMsj = 'Credenciales incorrectas';
        } else if (err.status === 500) {
          this.errorMsj = 'Error interno del servidor';
        } else {
          this.errorMsj = 'Error desconocido';
        }
      },
      () => {
        // Bloque finally, se ejecuta independientemente del resultado
        // Limpiar campos de formulario
        this.nombre_usuario = '';
        this.password = '';
      }
    );
  }

}