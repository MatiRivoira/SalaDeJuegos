import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./components/login/login.component').then((m) => m.LoginComponent),
    },
    {
        path: 'register',
        loadComponent: () => import('./components/register/register.component').then((m) => m.RegisterComponent),
    },
    {
        path: 'forgot-password',
        loadComponent: () => import('./components/forgot-password/forgot-password.component').then((m) => m.ForgotPasswordComponent),
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
        redirectTo: '/login', 
        pathMatch: 'full' 
    }
];
