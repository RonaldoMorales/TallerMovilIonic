import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { IonItem, IonLabel, IonInput, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, IonItem, IonLabel, IonInput, IonButton],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private authService = inject(AuthService);
  email: string = '';
  password: string = '';

  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: (res) => {
        console.log('Login successful', res);
        
        alert('Iniciaste sesión');
        
      },
      error: (err) => {
        console.error('Login failed', err);
        
      }
    });
  }
}