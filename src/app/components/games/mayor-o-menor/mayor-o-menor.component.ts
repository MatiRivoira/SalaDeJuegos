import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mayor-o-menor',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './mayor-o-menor.component.html',
  styleUrl: './mayor-o-menor.component.css'
})
export class MayorOMenorComponent {
  deck = this.createDeck();
  currentCard: any;
  nextCard: any;
  score = 0;
  cardState : any;
  currentCardImage:string;
  showScoreAnimation = false;
  isButtonsEnabled: boolean = true;

  gameLost:boolean = false;
  startTime: number;
  endTime: number;
  gameTimeInSeconds: number;

  constructor() {
    this.startGame();
  }

  startGame() {
    this.gameLost = false;
    this.score = 0;
    this.deck = this.createDeck();
    this.shuffleDeck();
    this.currentCard = this.deck.pop();
    this.nextCard = this.deck.pop();
    this.currentCardImage = this.getImageForCard(this.currentCard);
    this.cardState = 'active'; // Comienza el juego con la primera carta
    this.startTime = Date.now();
  }
  

  createDeck() {
    const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'];
    const deck = [];

    for (let suit of suits) {
      for (let value of values) {
        deck.push({ value, suit });
      }
    }

    return deck;
  }

shuffleDeck() {
  for (let i = this.deck.length - 1; i > 0; i--) {
      // Genera un índice aleatorio j que es menor o igual a i
      const j = Math.floor(Math.random() * (i + 1));
      // Intercambia las cartas en las posiciones i y j del mazo
      // Esto se hace mediante una desestructuración de array
      [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
  }
}


  guess(isHigher: boolean) {
    if (!this.deck.length) {
      this.deck = this.createDeck();
      this.shuffleDeck();
    }
  
    const nextCard = this.deck.pop();
    
    // Lógica para adivinar si la carta es mayor o menor    
    if (isHigher && this.cardValue(this.currentCard.value) <= this.cardValue(nextCard.value)) {
      this.showScoreAnimation = true;
      this.updateGameState(nextCard);
    } else if (!isHigher && this.cardValue(this.currentCard.value) >= this.cardValue(nextCard.value)) {
      this.showScoreAnimation = true;
      this.updateGameState(nextCard);
    } else {
      
      this.endTime = Date.now();
      this.gameTimeInSeconds = (this.endTime - this.startTime) / 1000;
      this.gameLost = true;
    }
  }
  
  updateGameState(nextCard: any) {
    this.isButtonsEnabled = false;  // Deshabilita los botones
    this.cardState = 'void'; // Reset animation state
    setTimeout(() => {
      this.score++;
      this.showScoreAnimation = false;
      this.currentCard = nextCard;
      this.currentCardImage = this.getImageForCard(nextCard);
      this.cardState = 'active'; // Trigger animation
      this.isButtonsEnabled = true;  // Vuelve a habilitar los botones
    }, 800);
  }
  
  getImageForCard(card: any): string {
    return `/assets/img/games/cartasMayorOMenor/${card.value}-${card.suit}.png`;
  }
  

  cardValue(value: string) {
    const order = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'];
    return order.indexOf(value);
  }
}
