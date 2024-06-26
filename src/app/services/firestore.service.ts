import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) {}

  addLogEntry(logEntry: any) {
    return this.firestore.collection('logs').add(logEntry);
  }
}
