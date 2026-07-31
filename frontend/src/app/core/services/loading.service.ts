// core/services/loading.service.ts
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private requisicoesAtivas = signal(0);

  carregando = () => this.requisicoesAtivas() > 0;

  iniciar(): void {
    this.requisicoesAtivas.update(valor => valor + 1);
  }

  finalizar(): void {
    this.requisicoesAtivas.update(valor => Math.max(valor - 1, 0));
  }
}