import { Route } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { PrincipalComponent } from './components/principal/principal.component'; // Importa el componente PrincipalComponent

export const routes: Route[] = [
  {
    path: '',
    redirectTo: 'login', 
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'principal',
    component: PrincipalComponent 
  },
  {
    path: '**', 
    redirectTo: 'login'
  }
];