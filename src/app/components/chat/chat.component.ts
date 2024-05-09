import { Component, OnInit, OnDestroy, ViewChild, ElementRef, inject } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ChatService } from '../../services/chat.service';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  @ViewChild('scrollMe') private myScrollContainer!: ElementRef<HTMLDivElement>;

  private subscription: Subscription;
  userdata: any;
  nombreCuenta: string = "Cuenta";
  messages: Observable<any[]>;
  newMessage: string = '';
  userId: string = '';

  auth = inject(AuthService);

  constructor(
    private chatService: ChatService, 
    private titleService: Title, 
    private router: Router
  ) {
    this.titleService.setTitle("Chat | Sala de juegos");
  }

  ngOnInit(): void {
    this.subscription = this.auth.getUser().subscribe(user => {
      if (user && user.email) {
        this.userdata = user;
        this.nombreCuenta = user.email;
        this.userId = user.uid;
      } else {
        this.router.navigate(['/login']);
      }
    });

    this.messages = this.chatService.getMessages();
    // Inicia el seguimiento del contenedor de scroll
    this.messages.subscribe(() => {
      setTimeout(() => this.scrollToBottom(), 100);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();  // Asegura la desuscripción para evitar fugas de memoria
    }
  }

  sendMessage(): void {
    if (!this.newMessage.trim()) {
      return; 
    }
    if (this.nombreCuenta) {
      this.chatService.sendMessage(this.newMessage, this.nombreCuenta);
      this.newMessage = '';
    } else {
      console.error("No user logged in or email is not available!");
    }
  }

  private scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.error('Could not scroll to bottom: ', err);
    }
  }
}
