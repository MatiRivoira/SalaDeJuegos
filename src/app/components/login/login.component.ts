import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';
import { inject } from "@angular/core";
import { AuthService } from '../../auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  showPassword: boolean = false;
  errMsgEmail!:string;
  errorStates = { email: false, pass: false };
  errMsg!:string;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  constructor(private titleService: Title, private router:Router) {
    this.titleService.setTitle("Iniciar sesión | Sala de juegos");
  }

  //?Login with firebase
  firebaseService = inject(AuthService);

  async onSubmit(formData: any){
    this.errorStates = { email: false, pass: false };
    this.errMsgEmail = "";
    this.errMsg = "";

    if (formData) {
      this.firebaseService.singIn(formData)
      .then(resp => {
        console.log(resp);
        this.esperarYRedirigir("userdata", JSON.stringify(resp), "/home");
      })
      .catch(err => {
        console.log(err);
        switch(err.code){
          case "auth/invalid-email":
            this.errMsgEmail = "Ingrese un correo electronico valido."
            this.errorStates.email = true;
            break;
          case "auth/invalid-credential":
            this.errMsg = "Correo y/o contraseña incorrecta."
            this.errorStates.email = true;
            this.errorStates.pass = true;
            break;
        }
      });
    }
  }

  esperarYRedirigir(storage:string, detalle:any, url:string, intervalo:number = 50) {
    const idIntervalo = setInterval(() => {
        sessionStorage.setItem(storage, detalle);
        if (sessionStorage.getItem(storage) == detalle) {
            clearInterval(idIntervalo);
            this.router.navigateByUrl(url);
        }
    }, intervalo);
  }
}