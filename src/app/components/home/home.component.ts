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

  constructor(private titleService: Title, private router:Router) {
    this.titleService.setTitle("Inicio | Sala de juegos");
  }

  ngOnInit(): void {
    this.userdata = sessionStorage.getItem("userdata");
    console.log(this.userdata);
    
    if (!this.userdata) {
      
    }
  }

  logOut(){
    sessionStorage.removeItem("userdata");
    this.userdata = null;
  }
}
