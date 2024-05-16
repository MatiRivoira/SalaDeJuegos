import { Component, OnInit } from '@angular/core';
import { PreguntadosService } from '../../../services/preguntados.service';
import { Pregunta } from '../../../interfaces/pregunta';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-preguntados',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})
export class PreguntadosComponent implements OnInit {
  preguntas: any[] = [];
  categorias: { categoria: string, color: string, colorBorder: string, iconClass: string }[] = [
    { categoria: "series", color: "#fd53b6", colorBorder: "#f44fac", iconClass: "bx bx-tv" },
    { categoria: "juegos", color: "#ff232f",colorBorder: "#d40c13", iconClass: "bx bx-game" },
    { categoria: "programacion", color: "#03e26d",colorBorder: "#4fae36", iconClass: "bx bx-code" },
    { categoria: "deportes", color: "#ff9000",colorBorder: "#de8f24", iconClass: "bx bx-football" }
  ];
  categoriaSeleccionada!: any;
  preguntaSeleccionada: Pregunta | null = null;
  ruletaTransform: string = "";
  angulo: number = 0;
  vueltas: number = 0;

  score: number = 0;

  constructor(private preguntadosService: PreguntadosService, private titleService: Title) {
    this.titleService.setTitle("Preguntados | Sala de juegos");
  }

  ngOnInit(): void {
    this.preguntas = this.preguntadosService.getPreguntas();
    this.reiniciarJuego();
  }

  // preguntados.component.ts

  girarRuleta() {
    if (this.angulo == 0) {
      this.startTime = Date.now();
    }
    let anguloRandom = Math.ceil(Math.random() * 3600);
    if (anguloRandom > 2000) {
      this.angulo += anguloRandom;
    } else {
      this.angulo += 1500 + anguloRandom;
    }
  
    // Aplicar transformación CSS a la ruleta
    this.ruletaTransform = `rotate(${this.angulo}deg)`;
  
    // Incrementar el contador de vueltas
    this.vueltas++;
  
    // Calcular la sección seleccionada
    const secciones = this.categorias.length;
    const anguloSeccion = 360 / secciones;
    var indiceSeleccionado = Math.floor((this.angulo % 360) / anguloSeccion);
    
    // Escuchar el evento de transición de la ruleta
    const wheelElement = document.querySelector(".wheel");
    wheelElement.addEventListener("transitionend", () => {
      setTimeout(() => {
        if (indiceSeleccionado == 3) {
          indiceSeleccionado = 1;
        } else if(indiceSeleccionado == 1) {
          indiceSeleccionado = 3;
        }
        this.categoriaSeleccionada = this.categorias[indiceSeleccionado];
        this.getPregunta();
        this.iniciarTemporizador();
      }, 1000);
    });
  }
  
  tiempoRestante: number = 10;
  temporizador: any;

  startTime: number;
  endTime: number;
  gameTimeInSeconds:number;
  
  iniciarTemporizador() {
    this.tiempoRestante = 10; // Reinicia el tiempo
    this.temporizador = setInterval(() => {
      if (this.tiempoRestante > 0) {
        this.tiempoRestante--;
      } else {
        clearInterval(this.temporizador);
        this.loseGame();
      }
    }, 1000);
  }

  getPregunta() {
    const preguntasCategoria = this.preguntas.filter(pregunta => pregunta.categoria === this.categoriaSeleccionada.categoria);
    console.log('Preguntas de la categoría seleccionada:', preguntasCategoria);
    
    // Seleccionar una pregunta aleatoria de la categoría
    this.preguntaSeleccionada = preguntasCategoria[Math.floor(Math.random() * preguntasCategoria.length)];
    console.log('Pregunta seleccionada:', this.preguntaSeleccionada);
  }

  claseBtn:string = "btn-normal";
  showScoreAnimation:boolean = false;
  scoreAnimationText:string = "Correcto";
  scoreAnimationShadowColor:string = '#00ff00'; // Color de sombra para
  respondio:boolean = false;
  evaluarRespuesta(opcion: string): void {
    clearInterval(this.temporizador);
    const boton = document.getElementById(opcion);
    if (boton) {
      boton.classList.remove('btn-normal'); // Elimina la clase existente
      boton.classList.add(opcion === this.preguntaSeleccionada.respuesta_correcta ? 'btn-correcto' : 'btn-error'); // Añade la nueva clase
    }
  
    
    if (opcion === this.preguntaSeleccionada.respuesta_correcta) {
      this.scoreAnimationText = 'Correcto';
      this.showScoreAnimation = true;
      this.scoreAnimationShadowColor = "#00ff00";
      this.showScoreAnimation = true;
      setTimeout(() => {
        this.score++;
        this.showScoreAnimation = false;
        this.categoriaSeleccionada = null;
      }, 700);
    } else {
      this.scoreAnimationText = 'Incorrecto';
      this.showScoreAnimation = true;
      this.scoreAnimationShadowColor = "#ff0000";
      setTimeout(() => {
        this.showScoreAnimation = false;
        this.tiempoRestante = 0;
        this.loseGame();
      }, 700);
    }
  }

  loseGame() {
    this.respondio = true;
    this.endTime = Date.now();
    this.gameTimeInSeconds = (this.endTime - this.startTime) / 1000;
  }

  reiniciarJuego(): void {
    // Reiniciar variables
    this.angulo = 0;
    this.vueltas = 0;
    this.score = 0;
    this.respondio = false;
    this.startTime = 0;
    this.endTime = 0;
    this.gameTimeInSeconds = 0;
    this.tiempoRestante = 10;
  
    // Detener el temporizador si está en funcionamiento
    clearInterval(this.temporizador);
  
    // Reiniciar la ruleta
    this.ruletaTransform = '';
  
    // Reiniciar la pregunta seleccionada
    this.preguntaSeleccionada = null;
  
    // Reiniciar la categoría seleccionada
    this.categoriaSeleccionada = null;
  
  }
  
}