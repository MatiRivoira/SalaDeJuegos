import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userdata!:any;
  nombreCuenta:string = "Cuenta";

  constructor(private titleService: Title, private router:Router) {
    this.titleService.setTitle("Inicio | Sala de juegos");
  }

  ngOnInit(): void {
    this.userdata = JSON.parse(sessionStorage.getItem("userdata"));
    
    if (this.userdata) {
      this.nombreCuenta = this.userdata.user.email;
    }
  }

  logOut(){
    sessionStorage.removeItem("userdata");
    this.userdata = null;
  }
}
