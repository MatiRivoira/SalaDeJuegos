import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { inject } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  showPassword: boolean = false;
  errMsgEmail!:string;
  errMsgPass!:string;
  errMsgPass2!:string;
  errMsg!:string;
  res!:boolean;
  msgRes:string = "Redirigiendo en 3 segundos...";
  redirigir:boolean = true;

  errorStates = { email: false, pass: false, pass2: false };

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  constructor(private titleService: Title, private router:Router) {
    this.titleService.setTitle("Crear cuenta | Sala de juegos");
  }

  //? Register with firebase
  firebaseService = inject(AuthService);

  async onSubmit(formData: any){
    this.errorStates = { email: false, pass: false, pass2: false };
    this.errMsgEmail = "";
    this.errMsgPass = "";
    this.errMsgPass2 = "";
    this.errMsg = "";
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var err:boolean = false;

    if (!formData.email) {
      this.errorStates.email = !formData.email;
      this.errMsgEmail = "Ingrese un email.";
      err = true;
    }
    if (!formData.password) {
      this.errorStates.pass = !formData.password;
      this.errMsgPass = "Ingrese una contraseña.";
      err = true;
    }
    if (!formData.confirmPassword) {
      this.errorStates.pass2 = !formData.confirmPassword;
      this.errMsgPass2 = "Ingrese nuevamente la contraseña.";
      err = true;
    }

    if (!regex.test(formData.email)) {
      this.errorStates.email = true;
      this.errMsgEmail = "Ingrese un email valido.";
      err = true;
    }

    if (formData.password !== formData.confirmPassword) {
      this.errorStates.pass = true;
      this.errorStates.pass2 = true;
      this.errMsg = "Las contraseñas no coinciden."
      return;
    }

    if (!err) {
      this.firebaseService.signUp(formData)
      .then(resp => {
        console.log(resp);
        this.res = true;
        let counter = 2;
        const interval = setInterval(() => {
          this.msgRes = `Redirigiendo en ${counter} segundos...`; // Actualiza el mensaje con el contador
          counter--;

          if (counter < 0) {
            clearInterval(interval);
            this.msgRes = "Redirigiendo...";
            if (this.redirigir) {
              this.firebaseService.singIn(formData);
              this.esperarYRedirigir("userdata", JSON.stringify(resp), "/home");
            }
          }
        }, 1000);
      })
      .catch(err => {
        console.log(err.message.trim());
        switch (err.message.trim()) {
          case "Firebase: Password should be at least 6 characters (auth/weak-password).":
            this.errMsg = "La contraseña debe tener al menos 6 caracteres.";
            this.errorStates.pass = true;
            this.errorStates.pass2 = true;
            break;
        
          case "Firebase: The email address is already in use by another account. (auth/email-already-in-use).":
            this.errorStates.email = true;
            this.errMsgEmail = "El email ya esta registrado.";
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
