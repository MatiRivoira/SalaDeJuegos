import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-snake-game',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './snake-game.component.html',
  styleUrl: './snake-game.component.css'
})
export class SnakeGameComponent implements OnInit {
  blockSize: number = 15;
  rows: number = 20;
  cols: number = 20;
  board: any;
  context: any;
  score:number = -1;

  snakeX: number = this.blockSize * 5;
  snakeY: number = this.blockSize * 5;
  velocityX: number = 0;
  velocityY: number = 0;
  snakeBody: any[] = [];

  foodX: number;
  foodY: number;

  gameOver: boolean = false;

  appleSVG: string = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-apple" viewBox="0 0 16 16">
  <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
  <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
</svg>
  `;

  constructor(private titleService: Title) {
    this.titleService.setTitle("Snake | Sala de juegos");
  }

  ngOnInit(): void {
    this.score = -1;
    this.board = document.getElementById("board");
    this.board.height = this.rows * this.blockSize;
    this.board.width = this.cols * this.blockSize;
    this.context = this.board.getContext("2d");
    this.placeFood();
    document.addEventListener("keyup", this.changeDirection.bind(this));
    setInterval(this.update.bind(this), 1000 / 10); //100 milliseconds
  }

  update(): void {
    if (this.gameOver) {
      return;
    }

    this.context.fillStyle = "#74c000";
    this.context.fillRect(0, 0, this.board.width, this.board.height);
  
    // Dibuja la manzana
    const img = new Image();
    img.src = `data:image/svg+xml;utf8,${encodeURIComponent(this.appleSVG)}`;
    img.onload = () => {
      this.context.drawImage(img, this.foodX, this.foodY, this.blockSize, this.blockSize);
    };

    this.context.fillStyle = "#transparent";
    this.context.fillRect(this.foodX, this.foodY, this.blockSize, this.blockSize);

    if (this.snakeX == this.foodX && this.snakeY == this.foodY) {
      this.snakeBody.push([this.foodX, this.foodY]);
      this.placeFood();
    }

    for (let i = this.snakeBody.length - 1; i > 0; i--) {
      this.snakeBody[i] = this.snakeBody[i - 1];
    }
    if (this.snakeBody.length) {
      this.snakeBody[0] = [this.snakeX, this.snakeY];
    }

    this.context.fillStyle = "#fec87e";
    this.snakeX += this.velocityX * this.blockSize;
    this.snakeY += this.velocityY * this.blockSize;
    this.context.fillRect(this.snakeX, this.snakeY, this.blockSize, this.blockSize);
    for (let i = 0; i < this.snakeBody.length; i++) {
      this.context.fillRect(this.snakeBody[i][0], this.snakeBody[i][1], this.blockSize, this.blockSize);
    }

    //game over conditions
    if (this.snakeX < 0 || this.snakeX > this.cols * this.blockSize || this.snakeY < 0 || this.snakeY > this.rows * this.blockSize) {
      this.gameOver = true;
    }

    for (let i = 0; i < this.snakeBody.length; i++) {
      if (this.snakeX == this.snakeBody[i][0] && this.snakeY == this.snakeBody[i][1]) {
        this.gameOver = true;
      }
    }
  }

  changeDirection(e: KeyboardEvent): void {
    if (e.code == "ArrowUp" && this.velocityY != 1) {
      this.velocityX = 0;
      this.velocityY = -1;
    }
    else if (e.code == "ArrowDown" && this.velocityY != -1) {
      this.velocityX = 0;
      this.velocityY = 1;
    }
    else if (e.code == "ArrowLeft" && this.velocityX != 1) {
      this.velocityX = -1;
      this.velocityY = 0;
    }
    else if (e.code == "ArrowRight" && this.velocityX != -1) {
      this.velocityX = 1;
      this.velocityY = 0;
    }
  }

  placeFood(): void {
    this.score++;
    this.foodX = Math.floor(Math.random() * this.cols) * this.blockSize;
    this.foodY = Math.floor(Math.random() * this.rows) * this.blockSize;
  }

  resetGame(): void {
    this.score = -1;
    this.snakeX = this.blockSize * 5;
    this.snakeY = this.blockSize * 5;
    this.velocityX = 0;
    this.velocityY = 0;
    this.snakeBody = [];
    this.gameOver = false;
    this.placeFood();
  }

  loadApple(): void {
    const img = new Image();
    img.src = `data:image/svg+xml;utf8,${encodeURIComponent(this.appleSVG)}`;
    img.onload = () => {
      this.context.drawImage(img, this.foodX, this.foodY, this.blockSize, this.blockSize);
    };
  }
}
