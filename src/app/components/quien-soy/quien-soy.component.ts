import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-quien-soy',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './quien-soy.component.html',
  styleUrl: './quien-soy.component.css'
})
export class QuienSoyComponent {
  private subscription: Subscription;
  userdata!:any;
  nombreCuenta:string = "Cuenta";

  auth = inject(AuthService);

  constructor(private titleService: Title, private router:Router) {
    this.titleService.setTitle("Quien soy | Sala de juegos");
  }

  ngOnInit(): void {
    this.subscription = this.auth.getUser().subscribe(user => {
      if (user) {
        this.userdata = user;
        this.nombreCuenta = user.email;
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // Desuscribirse para evitar fugas de memoria
  }
}
