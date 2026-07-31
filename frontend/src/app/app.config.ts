// app.config.ts
import { ApplicationConfig, APP_INITIALIZER } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { firstValueFrom, catchError, of } from 'rxjs';
import { AuthService } from './core/services/auth.service';
import { routes } from './app.routes';
import { credentialsInterceptor } from './core/interceptors/credentials.interceptor';
import { errorInterceptor } from './core/interceptors/error.interceptor';
import { loadingInterceptor } from './core/interceptors/loading.interceptor';

function inicializarSessao(authService: AuthService) {
  return () => firstValueFrom(
    authService.verificarSessao().pipe(
      catchError(() => of(null)) // se não tiver sessão válida, apenas segue (usuário não logado)
    )
  );
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([credentialsInterceptor, errorInterceptor, loadingInterceptor])),
    {
      provide: APP_INITIALIZER,
      useFactory: inicializarSessao,
      deps: [AuthService],
      multi: true
    }
  ]
};