import { Injectable, inject } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Router } from "@angular/router";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    auth = inject(AngularFireAuth);
    firestore = inject(AngularFirestore);
    router = inject(Router);

    getAuth(){
        return getAuth();
    }

    singIn(user:any){
        return signInWithEmailAndPassword(getAuth(), user.email, user.password);
    }

    signUp(user: any) {
        return createUserWithEmailAndPassword(getAuth(),  user.email, user.password);
    }

    sendRecoveryEmail(email: string) {
        return sendPasswordResetEmail(getAuth(), email);
    }
}