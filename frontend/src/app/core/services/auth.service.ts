// core/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, BehaviorSubject } from 'rxjs';
import { API_ENDPOINTS } from '../config/api-endpoints.config';
import { Usuario } from '../models/entities/usuario.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioLogadoSubject = new BehaviorSubject<Usuario | null>(null);
  usuarioLogado$ = this.usuarioLogadoSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(email: string, senha: string): Observable<Usuario> {
    return this.http.post<Usuario>(
      `${API_ENDPOINTS.auth}/login`,
      { email, senha },
      { withCredentials: true }
    ).pipe(
      tap(usuario => this.usuarioLogadoSubject.next(usuario))
    );
  }

  logout(): Observable<void> {
    return this.http.post<void>(
      `${API_ENDPOINTS.auth}/logout`,
      {},
      { withCredentials: true }
    ).pipe(
      tap(() => this.usuarioLogadoSubject.next(null))
    );
  }

  isLoggedIn(): boolean {
    return !!this.usuarioLogadoSubject.value;
  }

  getUsuarioLogado(): Usuario | null {
    return this.usuarioLogadoSubject.value;
  }

  verificarSessao(): Observable<Usuario> {
    return this.http.get<Usuario>(
      `${API_ENDPOINTS.auth}/me`,
      { withCredentials: true }
    ).pipe(
      tap(usuario => this.usuarioLogadoSubject.next(usuario))
    );
  }
}