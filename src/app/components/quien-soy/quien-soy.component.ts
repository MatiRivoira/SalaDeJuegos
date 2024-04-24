import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-quien-soy',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './quien-soy.component.html',
  styleUrl: './quien-soy.component.css'
})
export class QuienSoyComponent {
  userdata!:any;
  nombreCuenta!:string;

  constructor(private titleService: Title, private router:Router) {
    this.titleService.setTitle("Quien soy | Sala de juegos");
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
