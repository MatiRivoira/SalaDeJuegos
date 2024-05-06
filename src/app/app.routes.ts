import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'ahorcado',
        loadComponent: () => import('./components/games/ahorcado/ahorcado.component').then(m => m.AhorcadoComponent),
    },
    {
        path: 'mayor-o-menor',
        loadComponent: () => import('./components/games/mayor-o-menor/mayor-o-menor.component').then(m => m.MayorOMenorComponent),
    },
    {
        path: 'chat',
        loadComponent: () => import('./components/chat/chat.component').then(m => m.ChatComponent),
    },
    {
        path: 'login',
        loadComponent: () => import('./components/auth/login/login.component').then((m) => m.LoginComponent),
    },
    {
        path: 'register',
        loadComponent: () => import('./components/auth/register/register.component').then((m) => m.RegisterComponent),
    },
    {
        path: 'forgot-password',
        loadComponent: () => import('./components/auth/forgot-password/forgot-password.component').then((m) => m.ForgotPasswordComponent),
    },
    {
        path: 'home',
        loadComponent: () => import('./components/home/home.component').then((m) => m.HomeComponent),
    },
    {
        path: 'quien-soy',
        loadComponent: () => import('./components/quien-soy/quien-soy.component').then((m) => m.QuienSoyComponent),
    },
    { 
        path: '', 
        redirectTo: '/home', 
        pathMatch: 'full' 
    },
    {
        path: '**', 
        redirectTo: '/home', 
        pathMatch: 'full' 
    }
];
