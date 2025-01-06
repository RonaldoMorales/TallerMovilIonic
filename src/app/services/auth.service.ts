import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5134/taller-backend/Auth'; 
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<any> {
    const body = { correo: email, contraseña: password };
    return this.httpClient.post<any>(
      `${this.apiUrl}/login`,
      body,
      { headers: this.headers }
    ).pipe(
      map((response) => {
        
        this.router.navigate(['/principal']);
        return response;
      })
    );
  }

}