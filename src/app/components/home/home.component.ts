import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  userdata!:any;
  nombreCuenta:string = "Cuenta";

  auth = inject(AuthService);

  constructor(private titleService: Title, private router:Router) {
    this.titleService.setTitle("Inicio | Sala de juegos");
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
