import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ahorcado',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent {
  words: { word: string; hint: string }[] = [
    { word: 'angular', hint: 'Framework de desarrollo para construir aplicaciones web' },
    { word: 'react', hint: 'Biblioteca de JavaScript para construir interfaces de usuario' },
    { word: 'vue', hint: 'Framework progresivo para construir interfaces de usuario' },
    { word: 'javascript', hint: 'Lenguaje de programación interpretado' },
    { word: 'typescript', hint: 'Superset de JavaScript desarrollado por Microsoft' },
    { word: 'html', hint: 'Lenguaje de marcado para la elaboración de páginas web' },
    { word: 'css', hint: 'Lenguaje de diseño gráfico para definir el aspecto de las páginas web' },
    { word: 'python', hint: 'Lenguaje de programación de alto nivel famoso por su clara sintaxis' },
    { word: 'ruby', hint: 'Lenguaje de programación interpretado y orientado a objetos' },
    { word: 'php', hint: 'Lenguaje de programación del lado del servidor usado principalmente para desarrollo web' },
    { word: 'nodejs', hint: 'Entorno de ejecución para JavaScript construido con el motor V8 de Chrome' },
    { word: 'django', hint: 'Framework de alto nivel para Python que fomenta el desarrollo rápido' },
    { word: 'flask', hint: 'Framework minimalista para Python basado en Werkzeug y Jinja2' },
    { word: 'mongodb', hint: 'Base de datos NoSQL orientada a documentos' },
    { word: 'sql', hint: 'Lenguaje de consulta estructurado utilizado para manejar bases de datos relacionales' },
    { word: 'bootstrap', hint: 'Framework de front-end para desarrollar sitios web y aplicaciones web' },
    { word: 'swift', hint: 'Lenguaje de programación para desarrollo de iOS y macOS' },
    { word: 'kotlin', hint: 'Lenguaje de programación moderno y seguro utilizado principalmente para Android' },
    { word: 'flutter', hint: 'Framework de UI de código abierto creado por Google para desarrollar aplicaciones para móviles, web y escritorio' },
    { word: 'docker', hint: 'Plataforma de software que permite la virtualización a nivel de sistema operativo, conocida como contenedores' },
    { word: 'azure', hint: 'Plataforma de computación en la nube de Microsoft' },
    { word: 'aws', hint: 'Servicios de computación en la nube proporcionados por Amazon' },
    { word: 'git', hint: 'Sistema de control de versiones distribuido usado para el desarrollo de software' },
    { word: 'graphql', hint: 'Lenguaje de consulta para APIs y un tiempo de ejecución para ejecutar dichas consultas' },
    { word: 'json', hint: 'Formato ligero de intercambio de datos' }
  ];

  hint: string = '';
  selectedWord: string = '';
  maskedWord: string = '';
  lettersGuessed = new Set<string>();
  wrongAttempts: number = 0;
  maxAttempts: number = 0;
  alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
  images = [
    '/assets/img/games/fasesAhorcado/0.webp',
    '/assets/img/games/fasesAhorcado/1.webp',
    '/assets/img/games/fasesAhorcado/2.webp',
    '/assets/img/games/fasesAhorcado/3.webp',
    '/assets/img/games/fasesAhorcado/4.webp',
    '/assets/img/games/fasesAhorcado/5.webp',
    '/assets/img/games/fasesAhorcado/6.webp',
    '/assets/img/games/fasesAhorcado/7.webp',
    '/assets/img/games/fasesAhorcado/8.webp',
    '/assets/img/games/fasesAhorcado/9.webp',
    '/assets/img/games/fasesAhorcado/10.webp'
  ];
  currentImage = '';

  gameWon = false;
  gameLost = false;

  startTime: number;
  endTime: number;
  gameTimeInSeconds: number;
  score: number;

  constructor() {
    this.startGame();
  }

  startGame(): void {
    const randomIndex = Math.floor(Math.random() * this.words.length);
    const selectedWordObject = this.words[randomIndex];
    this.selectedWord = selectedWordObject.word;
    this.hint = selectedWordObject.hint;
    this.maskedWord = '_ '.repeat(this.selectedWord.length).trim();
    this.lettersGuessed.clear();
    this.wrongAttempts = 0;
    this.gameWon = false;
    this.gameLost = false;
    this.maxAttempts = 10;
    this.currentImage = this.images[0];  // Start with the initial image
    this.startTime = Date.now();
  }
  

  guess(letter: string): void {
    if (this.lettersGuessed.has(letter) || this.gameWon || this.gameLost) {
      return;
    }

    this.lettersGuessed.add(letter);

    if (this.selectedWord.includes(letter)) {
      this.updateMaskedWord();
    } else {
      this.wrongAttempts++;
      this.currentImage = this.images[Math.min(this.wrongAttempts, this.images.length - 1)];
    }

    this.checkGameState();
  }

  updateMaskedWord(): void {
    const updatedMaskedWord = this.selectedWord.split('').map((char, index) => {
      return this.lettersGuessed.has(char) ? char : this.maskedWord[index * 2]; // Ajusta index debido a los espacios
    }).join(' ');

    this.maskedWord = updatedMaskedWord;
  }

  checkGameState(): void {
    if (!this.maskedWord.includes('_')) {
      this.endGame();
      this.gameWon = true;
      this.lettersGuessed = new Set('abcdefghijklmnopqrstuvwxyz'.split('')); // Esto desactiva todos los botones.
      this.endGame();
    }

    if (this.wrongAttempts >= this.maxAttempts) {
      this.endGame();
      this.gameLost = true;
      this.score = 0;
    }
  }

  endGame(): void {
    this.endTime = Date.now();
    this.gameTimeInSeconds = (this.endTime - this.startTime) / 1000;
    this.calculateScore();
  }

  calculateScore(): void {
    this.score = Math.round(this.selectedWord.length / this.gameTimeInSeconds * 100);
  }
}
