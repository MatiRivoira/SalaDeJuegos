// src/app/services/chat.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export interface Message {
  id?: string;
  text: string;
  createdAt: any;
  userEmail: string;  // Cambiado de userId a userEmail
  timestamp: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private messagesCollection: AngularFirestoreCollection<Message>;

  constructor(private afs: AngularFirestore) {
    this.messagesCollection = afs.collection<Message>('messages', ref => ref.orderBy('createdAt', 'desc').limit(25));
  }

  getMessages(): Observable<Message[]> {
    return this.messagesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Message;
        const id = a.payload.doc.id;
        // Convertir el Timestamp de Firestore a Date de JavaScript
        const timestamp = data.timestamp as any;  // Firestore Timestamp
        data.timestamp = new Date(timestamp.seconds * 1000);  // Convertir a Date
        return { id, ...data };
      }))
    );
  }

  async sendMessage(newMessage: string, userEmail: string): Promise<void> {
    try {
      await this.messagesCollection.add({
        text: newMessage,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        userEmail: userEmail,  // Almacenando el email en lugar de userId
        timestamp: new Date()
      });
    } catch (error) {
      console.error("Error sending message: ", error);
    }
  }  
}
