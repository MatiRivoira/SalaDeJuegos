import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

//?Firebase Authentication
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";

import { routes } from './app.routes';

const firebaseConfig = {
  apiKey: "AIzaSyAJCQWMywqhpfZvztIlRaSBx4yafA0VSUE",
  authDomain: "saladejuegos-3a991.firebaseapp.com",
  projectId: "saladejuegos-3a991",
  storageBucket: "saladejuegos-3a991.appspot.com",
  messagingSenderId: "1056647022278",
  appId: "1:1056647022278:web:6c4cf5155b106f961d39c7"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    importProvidersFrom(
      AngularFireModule.initializeApp(firebaseConfig),
      HttpClientModule,
      AngularFirestoreModule
    )
  ]
};
