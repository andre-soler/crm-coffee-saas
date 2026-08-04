import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { StatusVisita } from '../../../core/models/enums/status-visita.enum';

interface ItemRoteiroView {
  id: number;
  clienteNome: string;
  clienteEndereco: string;
  status: StatusVisita;
}

@Component({
  selector: 'app-roteiro',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule
  ],
  templateUrl: './roteiro.html',
  styleUrl: './roteiro.scss'
})
export class Roteiro {
  StatusVisita = StatusVisita; // exposto pro template poder comparar

  // Mock temporário — substituir por chamada HTTP quando o backend existir
  itens: ItemRoteiroView[] = [
    { id: 1, clienteNome: 'Padaria Bom Grão', clienteEndereco: 'Rua das Flores, 123', status: StatusVisita.Pendente },
    { id: 2, clienteNome: 'Café Central', clienteEndereco: 'Av. Principal, 456', status: StatusVisita.Visitado },
    { id: 3, clienteNome: 'Mercadinho Aroma', clienteEndereco: 'Rua do Comércio, 789', status: StatusVisita.Pendente },
    { id: 4, clienteNome: 'Restaurante Sabor', clienteEndereco: 'Praça Central, 10', status: StatusVisita.NaoEncontrado }
  ];

  get totalVisitados(): number {
    return this.itens.filter(i => i.status === StatusVisita.Visitado).length;
  }

  marcarVisitado(item: ItemRoteiroView): void {
    item.status = StatusVisita.Visitado;
    // Aqui, futuramente: chamar API pra persistir essa mudança no backend
  }

  marcarNaoEncontrado(item: ItemRoteiroView): void {
    item.status = StatusVisita.NaoEncontrado;
    // Aqui, futuramente: chamar API pra persistir essa mudança no backend
  }
}