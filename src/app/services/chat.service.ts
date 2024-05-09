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
  userEmail: string;
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
  // Obtiene los cambios en tiempo real de la colección de mensajes y los transforma antes de emitirlos
  return this.messagesCollection.snapshotChanges().pipe(
    // Usa el operador map para transformar el array de cambios recibido
    map(actions => actions.map(a => {
      // Extrae los datos del documento actual y lo tipa como Message
      const data = a.payload.doc.data() as Message;
      // Extrae el ID del documento
      const id = a.payload.doc.id;
      // Extrae el timestamp almacenado en Firestore y lo tipa como 'any'
      const timestamp = data.timestamp as any;
      // Convierte el Timestamp de Firestore a un objeto Date de JavaScript
      data.timestamp = new Date(timestamp.seconds * 1000);
      // Retorna el objeto Message con su id y los datos incluyendo el timestamp ya convertido
      return { id, ...data };
    }))
  );
}


  async sendMessage(newMessage: string, userEmail: string): Promise<void> {
    try {
      await this.messagesCollection.add({
        text: newMessage,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        userEmail: userEmail,
        timestamp: new Date()
      });
    } catch (error) {
      console.error("Error al mandar el mensaje: ", error);
    }
  }  
}
